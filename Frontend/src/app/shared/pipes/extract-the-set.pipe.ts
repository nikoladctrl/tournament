import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractTheSet',
  pure: true
})
export class ExtractTheSetPipe implements PipeTransform {

  transform(result: string, setIndex: number, playerIndex: number): string {

    let sets = result.split(';');
    
    if (playerIndex === 1) {
      return sets[setIndex] ? sets[setIndex].substring(0, sets[setIndex].indexOf(':')) : '/';
    }
    else {
      return sets[setIndex] ? sets[setIndex].substring(sets[setIndex].indexOf(':') + 1, sets[setIndex].length) : '/';
    }
  }

}
