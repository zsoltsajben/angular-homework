import { Component, OnInit } from '@angular/core';
import { LinkDetailsModel } from '../models/link-details.model';
import { ActivatedRoute } from '@angular/router';
import { LinksApiClientService } from '../clients/links-api-client.service';
import { weirdFadeInAnimation } from 'src/app/utils/weird-fade-in-animation';

@Component({
  templateUrl: './link-details.page.component.html',
  styleUrls: ['./link-details.page.component.scss'],
  animations: [weirdFadeInAnimation]
})
export class LinkDetailsPageComponent implements OnInit {
  link: LinkDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private linksApiClientService: LinksApiClientService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.linksApiClientService
      .getLinkDetails(id)
      .subscribe(result => this.link = result);
  }

}
