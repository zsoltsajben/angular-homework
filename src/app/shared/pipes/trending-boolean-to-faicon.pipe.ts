import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trendingBooleanToFaicon'
})
export class TrendingBooleanToFaiconPipe implements PipeTransform {

  transform(isTrending: boolean, args?: any): any {
    return isTrending ? 'fa fa-fire' : '';
  }

}
