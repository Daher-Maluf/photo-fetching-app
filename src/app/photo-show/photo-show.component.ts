import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';


@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  imageUrl: string;

  constructor(private ps: PhotosService) {
   this.buscarImg();


  }

  ngOnInit(): void {

  }
  onChangePhoto() {
    this.buscarImg();
  }
  buscarImg() {
    this.ps.getPhoto()
    .subscribe((response) => {

    this.imageUrl = response.urls.regular;

    });
  }
}
