import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { PlannerService } from '../shared/services/plannerService/planner.service';
import { Post } from '../shared/models/planner';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';
import { SharedService } from '../shared/services/sharedService/shared.service';
//two-way binding
export interface MyData {
  id: string;
  filepath: any;
  title: string;
  description: string;
  createdDate: any;
  uid: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  planners: any[]=[];
  sub: any;
  referance: any;
  currentUser: any;
  isFavrit=false;
  postsSubscription: Subscription;
  posts: Post[] = [];
  postsData=false;
  private plannerCollection: AngularFirestoreCollection<MyData>;
  constructor(private route: Router,private database: AngularFirestore,public authentication: AuthenticationService,
              private sharedService: SharedService, private plannerService: PlannerService) {

   }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loadRelatedPosts();
  }
  async loadRelatedPosts() {
    // this.sharedService.presentLoading();
    this.postsSubscription = this.plannerService.getRelatedPosts().subscribe(posts => {
      this.postsData=true;
      this.posts = posts;
      console.log('Related Post',this.posts);
    }, error => {
      console.error('HomePage -> ngOnInit -> error', error);
    });
  }
  goToAdd(){
this.route.navigate(['tabs/add-planner']);
  }
  goToUpdate(id) {
    this.route.navigate(['tabs/add-planner'], { queryParams: { id } });
  }
  async toggleBookmark(post: Post) {
    const isBookmarked = this.isBookmarked(post.bookmarks);
    if (!isBookmarked) {
      await this.plannerService.bookmarkPost(post.id, this.authentication.userData.uid);
    } else {
      await this.plannerService.undoBookmarkPost(post.id, this.authentication.userData.uid);
    }
  }
  isBookmarked(bookmarks: { [key: string]: boolean }): boolean {
    if (bookmarks) {
      if (bookmarks[this.authentication.userData.uid]) {
        return true;
      }
    }

    return false;
  }
}
