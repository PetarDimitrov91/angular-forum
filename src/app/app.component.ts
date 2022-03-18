import { Component } from '@angular/core';
import {IPost} from "./shared/interfaces";
import {ContentService} from "./content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchRecentPosts();
  }

  fetchRecentPosts():void{
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}
