import { Component, OnInit } from '@angular/core';


const Themes: { description: string }[] = [
  {
    description: 'Рекомендованные статьи',
  },
  {
    description: 'Изменение условий аренды',
  },
  {
    description: 'Верификация и подтверждение',
  },
  {
    description: 'Требования к бронированию',
  },
  {
    description: 'Аккаунт пользователя',
  },
  {
    description: 'Разместить объявление',
  },
  {
    description: 'Бронирование',
  },
  {
    description: 'Оплата',
  },
  {
    description: 'Партнерство',
  }
];



@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.sass']
})
export class SupportComponent implements OnInit {
  themes = Themes;

  constructor() {

  }

  ngOnInit() {
  }

}
