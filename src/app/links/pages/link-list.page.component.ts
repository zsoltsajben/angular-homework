import { Component, OnInit } from '@angular/core';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinksApiClientService } from '../clients/links-api-client.service';

@Component({
  selector: 'app-link-list.page',
  templateUrl: './link-list.page.component.html',
  styleUrls: ['./link-list.page.component.scss']
})
export class LinkListPageComponent implements OnInit {
  links: LinkListItemModel[];

  constructor(private linksApiClientService: LinksApiClientService) { }

  ngOnInit() {
    this.linksApiClientService
      .getLinks()
      .subscribe(result => this.links = result);
  }

}
