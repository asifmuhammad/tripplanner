import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../shared/models/planner';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';
import { PlannerService } from '../shared/services/plannerService/planner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentAccountInfo: any;
  userData=false;
  userPosts: Post[] = [];
  userPostsSubscription: Subscription;
  bookmarkedPostsSubscription: Subscription;
  bookmarkedPosts: Post[] = [];
  constructor(
    private router: Router,
    public authService: AuthenticationService,
    private plannerService: PlannerService
  ) {}

  ngOnInit() {

  }
  ionViewWillEnter() {
    const currentUser = localStorage.getItem('user');
    const user = JSON.parse(currentUser);
    this.authService.getCurrentAccountInfoObservable(user.uid).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (currentUser) => {
        this.userData = true;
        this.currentAccountInfo = currentUser;
        console.log('currentAccountInfo', this.currentAccountInfo);
      },
      (error) => {
        console.error('UserProfilePage -> ngOnInit -> error', error);
      }
    );
    (async () => {
      this.bookmarkedPostsSubscription = this.plannerService
        .getBookmarkedPosts(user.uid)
        .subscribe((posts) => {
          this.bookmarkedPosts = posts;
          console.log('bookmarked',this.bookmarkedPosts);
        });
    })();
  }
  logout() {
    this.authService.SignOut().then((res) => {
      this.router.navigate(['/start-page']);
      localStorage.clear();
    });
  }
}
