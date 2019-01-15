import { Injectable } from '@angular/core';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinkDetailsModel } from '../models/link-details.model';
import { Observable, of } from 'rxjs';

const dummyList: LinkListItemModel[] = [
  { id: 1, title: 'This is how you can double your salary in a week!', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', rating: -1 },
  // tslint:disable-next-line:max-line-length
  { id: 2, title: 'Happiness', url: 'https://www.reddit.com/r/AnimalsBeingDerps/comments/afquuu/happiest_baby_goat_in_the_world/', rating: +1 }
];

// tslint:disable-next-line:max-line-length
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const dummyDetailList: LinkDetailsModel[] =
  dummyList.map((listItem: LinkListItemModel): LinkDetailsModel => ({
    ...listItem,
    description: loremIpsum.substr(0, (1 + Math.random()) * loremIpsum.length / 2 + 1)
  }));

@Injectable({
  providedIn: 'root'
})
export class LinksApiClientService {

  constructor() { }

  getLinks(): Observable<LinkListItemModel[]> {
    return of(dummyList);
  }

  getLinkDetails(id: number): Observable<LinkDetailsModel> {
    return of(dummyDetailList.find(details => details.id === id));
  }
}
