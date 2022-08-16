import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullSet'
})
export class FullSetPipe implements PipeTransform {

  transform(result: string, setNo: number): string {
    
    let sets = result.split(';');

    return setNo < sets.length ? sets[setNo] : '/';
  }

}
