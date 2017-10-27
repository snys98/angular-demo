import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bool2disabled'
})
export class Bool2DisabledPipe implements PipeTransform {

    transform(value: boolean): string {
        return value ? '' : 'disabled';
    }

}
