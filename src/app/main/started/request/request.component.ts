import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';


// Справочник республика | город для статического авто заполнения
export interface City {
  cityName: string;
}
export interface Republic {
  republicName: string;
  cities: Array<City>;
}

const republic: Republic = {
  republicName: 'Республика Коми',
  cities: [
    { cityName: 'Сыктывкар'},
    { cityName: 'Ухта'},
    { cityName: 'Воркута'},
    { cityName: 'Сосногорск'},
    { cityName: 'Усинск'},
    { cityName: 'Микунь'},
  ],
};

// Справочник гости | животные
export interface Quest  {
  amountGuest: number;
  amountAnimal: number;
}

// Справочник тип объекта
export interface TypeProperty {
  typeProperty: string;
}



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
    
  }

  callFilterArrival() {

  }

}
