import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LinkFormModel } from '../models/link-form.model';
import { NotEqualsValidator } from 'src/app/shared/validators/not-equals.validator';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent implements OnInit, OnChanges {

  @Input() link: LinkFormModel;
  @Output() save = new EventEmitter<LinkFormModel>();
  @Output() cancel = new EventEmitter<void>();

  linkForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    isTrending: new FormControl(),
    description: new FormControl('', [Validators.required, NotEqualsValidator])
  });

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.link) {
      this.linkForm.patchValue(this.link);
    }
  }
}
