import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToArray'
})
export class IntToArrayPipe implements PipeTransform {

  transform(value: number | undefined): any {
    return value ? new Array(value) : new Array(5)
  }

}
