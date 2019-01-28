import { Component, OnInit, Inject } from '@angular/core';
import { LinkDetailsModel } from '../models/link-details.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LinksApiClientService } from '../clients/links-api-client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LinkFormModel } from '../models/link-form.model';

@Component({
  templateUrl: './link-edit.page.component.html',
  styleUrls: ['./link-edit.page.component.scss']
})
export class LinkEditPageComponent implements OnInit {

  link: LinkDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private linksApiclient: LinksApiClientService,
    @Inject(HTTP_INTERCEPTORS) interceptors
  ) {
    console.log(interceptors);
  }

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id');

    this.linksApiclient.getLinkDetails(id)
      .subscribe(res => this.link = res);
  }

  save(link: LinkFormModel): void {
    console.log(link);
  }

  cancel(): void {
    this.location.back();
  }
}
