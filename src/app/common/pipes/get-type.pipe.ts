import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getType'
})
export class GetTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return typeof(value);
  }

}
