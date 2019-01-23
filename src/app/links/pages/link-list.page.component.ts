import { Component, OnInit, OnDestroy } from '@angular/core';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinksApiClientService } from '../clients/links-api-client.service';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  templateUrl: './link-list.page.component.html',
  styleUrls: ['./link-list.page.component.scss']
})
export class LinkListPageComponent implements OnInit, OnDestroy {
  links: LinkListItemModel[];
  filter: string = null;
  isLoading = true;

  destroy$ = new Subject();
  inputHandler$ = new Subject<string>();

  constructor(
    private linksApiClientService: LinksApiClientService
  ) { }

  ngOnInit() {
    this.loadList();
    this.inputHandler$
      .pipe(
        filter((x: string) => !x || x.length > 1),
        debounceTime(500),
        distinctUntilChanged((x, y) => x === y),
        // tap(x => console.log(x)),
        takeUntil(this.destroy$))
      .subscribe(() => this.loadList());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private loadList() {
    this.isLoading = true;
    this.linksApiClientService
      .getLinks(this.filter)
      .subscribe(
        result => this.links = result,
        error => alert('An error happened: ' + error),
        () => this.isLoading = false);
  }
}
