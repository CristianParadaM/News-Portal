import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    return value.substring(0, limit > value.length ? value.length: limit)+'...';
  }

}
