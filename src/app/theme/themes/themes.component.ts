import { Component, OnInit } from '@angular/core';
import {IPost, ITheme} from "../../shared/interfaces";
import {ContentService} from "../../content.service";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {
  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchThemes():void{
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts():void{
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}


