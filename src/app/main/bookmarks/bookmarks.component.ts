import { Component, OnInit } from '@angular/core';

const Bookmarks : { description: string }[] = [
  {
    description: 'Добавлено 1 предложение',
  },
]







@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
