import { Injectable } from '@angular/core';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinkDetailsModel } from '../models/link-details.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { dummyList, dummyDetailList } from '../interceptors/fake-backend.interceptor';
import { HttpClient } from '@angular/common/http';

const filterFunction = (filter: string) => {
  return (x: LinkListItemModel): boolean => {
    return (filter && x.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  };
};

@Injectable()
export class LinksApiClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLinks(filter: string): Observable<LinkListItemModel[]> {
    // return throwError('vmi hiba');
    const observableList = filter
      ? of(dummyList.filter(filterFunction(filter)))
      : of(dummyList);
    return observableList
      .pipe(delay(500));
  }

  getLinkDetails(id: number): Observable<LinkDetailsModel> {
    // return of(dummyDetailList.find(details => details.id === id));
    return this.httpClient.get<LinkDetailsModel>(`/links/${id}`);
  }
}
