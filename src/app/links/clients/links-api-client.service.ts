import { Injectable } from '@angular/core';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinkDetailsModel } from '../models/link-details.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

const filterFunction = (filter: string) => {
  return (x: LinkListItemModel): boolean => {
    return (filter && x.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  };
};

const dummyList: LinkListItemModel[] = [
  {
    id: 1,
    title: 'You can double your salary in a week (secret method)',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 5,
    dislikes: 95,
    isTrending: false
  },
  {
    id: 2,
    title: 'So this is how deers play (funny)',
    url: 'https://www.reddit.com/r/gifs/comments/a9kvxx/is_this_how_you_play/',
    likes: 150,
    dislikes: 40,
    isTrending: true
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

  getLinks(filter: string): Observable<LinkListItemModel[]> {
    // return throwError('vmi hiba');
    const observableList = filter
      ? of(dummyList.filter(filterFunction(filter)))
      : of(dummyList);
    return observableList
      .pipe(delay(500));
  }

  getLinkDetails(id: number): Observable<LinkDetailsModel> {
    return of(dummyDetailList.find(details => details.id === id));
  }
}
