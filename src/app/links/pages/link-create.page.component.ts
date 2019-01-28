import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LinkFormModel } from '../models/link-form.model';

@Component({
  templateUrl: './link-create.page.component.html',
  styleUrls: ['./link-create.page.component.scss']
})
export class LinkCreatePageComponent implements OnInit {

  link = {};

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  save(book: LinkFormModel): void {
    console.log(book);
  }

  cancel(): void {
    this.location.back();
  }
}
