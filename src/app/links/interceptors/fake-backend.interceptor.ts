import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { LinkListItemModel } from '../models/link-list-item.model';
import { LinkDetailsModel } from '../models/link-details.model';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

export const dummyList: LinkListItemModel[] = [
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

export const dummyDetailList: LinkDetailsModel[] =
  dummyList.map((listItem: LinkListItemModel): LinkDetailsModel => ({
    ...listItem,
    description: loremIpsum.substr(0, (1 + Math.random()) * loremIpsum.length / 2 + 1)
  }));

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(
        mergeMap(() => {
          
          if (request.url.match(/\/links\/\d+$/) && request.method === 'GET') {
            const urlParts = request.url.split('/');
            const id = parseInt(urlParts[urlParts.length - 1], 10);
            const link = dummyDetailList.find(x => x.id === id);

            if (link) {
              return of(new HttpResponse({
                status: 200,
                body: link
              }));
            } else {
              return throwError({
                error: {
                  message: 'Not found asdadsasd'
                }
              });
            }
          }

          // pass through any requests not handled above
          return next.handle(request);
        })
      )
      // call materialize and dematerialize to ensure delay
      // even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}
