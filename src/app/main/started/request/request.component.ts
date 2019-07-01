import { Component, OnInit, Output}  from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {

  @Output() filterPlace: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callFilterPlace() {
    this.filterPlace.emit(true);
  }

}
