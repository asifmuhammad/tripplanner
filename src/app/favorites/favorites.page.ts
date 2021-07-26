import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { Post } from '../shared/models/planner';
import { PlannerService } from '../shared/services/plannerService/planner.service';
export interface MyData {
  id:string;
  filepath: any;
  title:string;
  description:string;
  created_date:any;
  uid:string;
}
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  planners:any[]=[];
  sub:any;
  referance:any;
  currentUser:any;
  postsData=false;
  
  userPostsSubscription: Subscription;
  bookmarkedPostsSubscription: Subscription;
  bookmarkedPosts: Post[] = [];
  private plannerCollection: AngularFirestoreCollection<MyData>;
  constructor(private route: Router,private database: AngularFirestore,private plannerService:PlannerService, private loadingController:LoadingController) {    

   }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    let currentUser = localStorage.getItem("user");
    this.currentUser = JSON.parse(currentUser);
    (async () => {
      this.bookmarkedPostsSubscription = this.plannerService
        .getBookmarkedPosts(this.currentUser.uid)
        .subscribe((posts) => {
          this.postsData=true;
          this.bookmarkedPosts = posts;
          console.log("bookmarked",this.bookmarkedPosts);
        });
    })();
  }
}
