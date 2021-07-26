import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Post } from '../../models/planner';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor(
    private afStore: AngularFirestore,) { }
    async addPost(post: Post) {
      try {
        return await this.afStore.collection(`posts`).doc(post.id).set(post);
      } catch (error) {
        console.error('UploadService -> addPost -> error', error);
        throw new Error(error);
      }
    }
    getRelatedPosts(): Observable<Post[]> {
      const posts$ = this.afStore.collection('posts', ref => ref.orderBy('createdAt', 'desc')).snapshotChanges();
      return this.mapPosts(posts$);
    }
  async bookmarkPost(postId: string, currentUserId: string) {
    try {
      const post: Post = (await this.afStore.doc(`posts/${postId}`).get().toPromise()).data() as Post;
      const bookmarks = { [currentUserId]: true, ...post.bookmarks };
      return await this.afStore.doc('posts/' + postId).update({ bookmarks });
    } catch (error) {
      console.error('TimelineService -> bookmarkPost -> error', error);
    }
  }
  async undoBookmarkPost(postId: string, currentUserId: string) {
    try {
      const post: Post = (await this.afStore.doc(`posts/${postId}`).get().toPromise()).data() as Post;
      delete post.bookmarks[currentUserId];
      return await this.afStore.doc('posts/' + postId).update({ bookmarks: post.bookmarks });
    } catch (error) {
      console.error('TimelineService -> undoBookmarkPost -> error', error);
    }
  }
  getBookmarkedPosts(userId: string): Observable<Post[]> {
    const posts$ = this.afStore.collection('posts', ref => ref.where('bookmarks.' + userId, '==', true)).snapshotChanges();
    return this.mapPosts(posts$);
  }
  getUserPosts(userId: string): Observable<Post[]> {
    const posts$ = this.afStore.collection('posts', ref => {
      return ref.where('postBy', '==', userId).orderBy('createdAt', 'desc');
    }).snapshotChanges();
    return this.mapPosts(posts$);
  }
  private mapPosts(posts$: Observable<DocumentChangeAction<any>[]>): Observable<Post[]> {
    return posts$.pipe(
      debounceTime(300),
      map(actions => {
        return actions.map(action => {
          return { id: action.payload.doc.id, ...action.payload.doc.data() } as Post;
        });
      }),
    );
  }
}
