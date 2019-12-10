import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageObject=[
    {
    image: './assets/images/1.png',
    thumbImage: './assets/images/1.png',
    // alt: 'alt of image',
    title: 'title of image 1'
    }, 
    {
      image: './assets/images/2.jpg',
      thumbImage: './assets/images/2.jpg',
      // alt: 'alt of image',
      title: 'title of image 2'
    }, 
    {
      image: './assets/images/3.jpg',
      thumbImage: './assets/images/3.jpg',
      // alt: 'alt of image',
      title: 'title of image 3'
    }, 
    {
      image: './assets/images/4.jpg',
      thumbImage: './assets/images/4.jpg',
      // alt: 'alt of image',
      title: 'title of image 4'
    }
    
    
  ];
  data=[
    {
      name : "rohit",
      age : 25,
      gender : "male",
      salary : 5500
    },
    {
      name : "james",
      age : 23,
      gender : "male",
      salary : 8700
    },
    {
      name : "nisha",
      age : 28,
      gender : "female",
      salary : 4000
    }
  ]

  constructor() { }

  ngOnInit() {
   // this.imagesUrl = ['./assets/images/1.png', './assets/images/2.jpg', './assets/images/3.jpg', './assets/images/4.jpg'];
  
  }

}
