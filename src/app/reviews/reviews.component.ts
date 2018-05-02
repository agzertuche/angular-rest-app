import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title = 'This is the title of reviews component';
  ratings = [1, 4, 9, 2, 8, 4, 9, 3, 8, 9];

  constructor() {}

  ngOnInit() {}
}
