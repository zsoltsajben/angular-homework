import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './changedetection.page.component.html',
  styleUrls: ['./changedetection.page.component.scss']
})
export class ChangedetectionPageComponent implements OnInit {

  demoModel = {
    alma: 3,
    korte: 5
  };

  constructor() { }

  ngOnInit() {
  }

  changeAlma() {
    this.demoModel.alma = Math.random();
  }

  changeModel() {
    this.demoModel = { ...this.demoModel, alma: Math.random() };
  }
}
