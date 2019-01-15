import { Injectable } from '@angular/core';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinkDetailsModel } from '../models/link-details.model';
import { Observable, of } from 'rxjs';


const dummyList: LinkListItemModel[] = [
  {
    id: 1,
    title: 'You can double your salary in a week (secret method)',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 5,
    dislikes: 95
  },
  {
    id: 2,
    title: 'So this is how deers play (funny)',
    url: 'https://www.reddit.com/r/gifs/comments/a9kvxx/is_this_how_you_play/',
    likes: 150,
    dislikes: 40
  }
];

// tslint:disable-next-line:max-line-length
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const dummyDetailList: LinkDetailsModel[] =
  dummyList.map((listItem: LinkListItemModel): LinkDetailsModel => ({
    ...listItem,
    description: loremIpsum.substr(0, (1 + Math.random()) * loremIpsum.length / 2 + 1)
  }));


@Injectable()
export class LinksApiClientService {

  constructor() { }

  getLinks(): Observable<LinkListItemModel[]> {
    return of(dummyList);
  }

  getLinkDetails(id: number): Observable<LinkDetailsModel> {
    return of(dummyDetailList.find(details => details.id === id));
  }
}
