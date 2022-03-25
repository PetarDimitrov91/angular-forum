import {Component, OnInit} from '@angular/core';
import {IPost, ITheme} from "../../shared/interfaces";
import {ContentService} from "../../content.service";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {
  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;

  get isLogged(): boolean {
   return this.userService.isLogged;
  }

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {

    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}


