import { Component, OnInit } from '@angular/core';
import { LinkDetailsModel } from '../models/link-details.model';
import { ActivatedRoute } from '@angular/router';
import { LinksApiClientService } from '../clients/links-api-client.service';

@Component({
  selector: 'app-link-details.page',
  templateUrl: './link-details.page.component.html',
  styleUrls: ['./link-details.page.component.scss']
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
