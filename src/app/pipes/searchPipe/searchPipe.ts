import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    let tempFilter = {};
    for (let property in items[0]) {
      tempFilter[property] = searchText;
    }
    let filterKeys = Object.keys(tempFilter);
    return items.filter(item => {
      return filterKeys.some(keyName => {
        return (
          new RegExp(tempFilter[keyName], 'gi').test(item[keyName]) ||
          tempFilter[keyName] === ''
        );
      });
    });
  }
}
