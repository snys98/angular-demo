import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, args?: number): number {
      if (!args) {
          throw new Error('multiple管道必须指定值');
      }
    return value * args;
  }

}
