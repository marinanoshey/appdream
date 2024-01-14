import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards = [
    { image: '../../../assets/colors.jpg'   ,p1:'merna'},
    { image: '../../../assets/colors.jpg' , p1:'marina' },
    { image: '../../../assets/art.jpg',   p1:'heelo' },
    { image: '../../../assets/art.jpg',   p1:'heelo' },
    // Add more cards as needed
  ];


}
