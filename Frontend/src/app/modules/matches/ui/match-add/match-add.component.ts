import { FormGroup, ValidationErrors } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player/player.model';
import { AppState } from 'src/app/store';

import * as MatchActions from '../../data/match.actions';
import * as fromPlayerSelectors from '../../../players/data/player.selectors';
import { CreateMatch } from 'src/app/shared/models/match/create-match.model';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchAddComponent implements OnInit {

  players$: Observable<Player[]> = this.store.select(fromPlayerSelectors.selectPlayers);

  form = this.fb.group({
    playerOneName: new FormControl('', [Validators.required, this.validateFirstName.bind(this)]),
    playerTwoName: new FormControl('', [Validators.required, this.validateSecondName.bind(this)]),
    sets: this.fb.array([
    ]) 
  });

  i: number = 0;
  result: string = "";
  firstWin: number = 0;
  secondWin: number = 0;
  finalResult: string = "";
  checkSet: boolean = false;

  private validateFirstName(control: FormControl) {
    if (control.dirty && control.value === this.form.get('playerTwoName').value) {
      return { sameNames: true };
    }
    return null;
  }

  private validateSecondName(control: FormControl) {
    if (control.dirty && control.value === this.form.get('playerOneName').value) {
      return { sameNames: true };
    }
    return null;
  }

  // setForm functions

  get sets() {
    return this.form.controls["sets"] as FormArray;
  }

  addNewSet() {
    
    const setForm = this.fb.group({
      ['pOnePoints' + this.i]: new FormControl(0, [Validators.required]),
      ['pTwoPoints' + this.i]: new FormControl(0, [Validators.required])
    });
    
    this.sets.push(setForm);
    this.sets.setValidators(this.validateFields(this.i));
    this.i += 1;
  }

  removeSet(index: number) {
    this.sets.at(index).clearValidators();
    this.sets.removeAt(index);
    this.i -= 1;
  }

  private validateFields(index: number): ValidatorFn | ValidatorFn[] {
    return (group: FormGroup): ValidationErrors => {
      if (index < group.value.length) {
        if (
            group.value[index]['pOnePoints' + index] > 9 && group.value[index]['pTwoPoints' + index] > 9 && 
            Math.abs(group.value[index]['pOnePoints' + index] - group.value[index]['pTwoPoints' + index]) === 2
          ) {
          group.controls[index]['controls']['pOnePoints' + index].setErrors(null);
          group.controls[index]['controls']['pTwoPoints' + index].setErrors(null);
        }
        else if (
          group.value[index]['pOnePoints' + index] === 11 && 
          (group.value[index]['pTwoPoints' + index] <= 9 || group.value[index]['pTwoPoints' + index] === 13)
          ) {
            group.controls[index]['controls']['pOnePoints' + index].setErrors(null);
            group.controls[index]['controls']['pTwoPoints' + index].setErrors(null);
          }
          else if ((group.value[index]['pOnePoints' + index] <= 9 || group.value[index]['pTwoPoints' + index] === 13) && group.value[index]['pTwoPoints' + index] === 11) {
            group.controls[index]['controls']['pOnePoints' + index].setErrors(null);
            group.controls[index]['controls']['pTwoPoints' + index].setErrors(null);
          }
          else {
            group.controls[index].setErrors({ invalidSet: true });
        }
        return;   
      }     
    } 
  }

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(MatchActions.getPlayers());
  }

  onSubmit() {
    let result: string = "";
    // let firstWin = 0, secondWin = 0;
    const length = this.form.get('sets').value.length;
    
    for(let i = 0; i < length; i++) {
      if (this.sets.value[i]['pOnePoints' + i] > this.sets.value[i]['pTwoPoints' + i]) {
        this.firstWin += 1;
      }
      if (this.sets.value[i]['pOnePoints' + i] < this.sets.value[i]['pTwoPoints' + i]) {
        this.secondWin += 1;
      }
      result = result.concat(`${this.sets.value[i]['pOnePoints' + i]}:${this.sets.value[i]['pTwoPoints' + i]};`)
    }
    const finalResult = `${this.firstWin}:${this.secondWin};${result}`;
    const newMatch: CreateMatch =  {
      playerOneId: parseInt(this.form.get('playerOneName').value),
      playerTwoId: parseInt(this.form.get('playerTwoName').value),
      result: finalResult
    };

    if (this.checkResult()) {
      this.store.dispatch(MatchActions.addMatch({ match: newMatch }));
    }
    else {
      console.log('Cannot submit a value');
    }

  }

  checkResult() {
    console.log(this.firstWin, this.secondWin);
    if (this.firstWin + this.secondWin > 5) {
      return false;
    }
    if (this.firstWin !== 3 && this.secondWin !== 3) {
      return false;
    }
    return true;
  }

}