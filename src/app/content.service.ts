import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost, ITheme} from "./shared/interfaces";
import {environment} from "../environments/environment";

const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {
  }

  loadTheme(id: String){
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`)
  }

  loadThemes(){
   return this.http.get<ITheme[]>(`${API_URL}/themes`)
  }

  loadPosts(limit?: number){
    const query = limit ? `?limit=${limit}` : '';
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`)
  }
}
