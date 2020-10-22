import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResult {
   urls: {
     regular: string;
   };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResult>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID WlYghoODrzdG7jpy_iKktuvH3KbAtKWfclvj56GZJVc'
      }
    });
  }
}
