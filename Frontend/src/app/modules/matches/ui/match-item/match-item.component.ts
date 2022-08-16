import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchItemComponent implements OnInit {

  @Input() match;
  // sets = ['FIRST SET', 'SECOND SET', 'THIRD SET', 'FOURTH SET', 'FIFTH SET', 'FINAL RESULT'];

  constructor() { }

  ngOnInit(): void {
  }

  getNumberOfSets(result: string): string[] {
    let sets = [], counter = 0;
    for(let i = 0; i < result.length; i++) {
      if (result[i] === ';') {
        counter++;
      }
    }
    return [...sets.slice(0, counter), sets[sets.length - 1]];

  }

}
