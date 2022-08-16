import { AsyncValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Player } from "src/app/shared/models/player/player.model";
import { PlayerService } from "src/app/shared/services/player.service";

export class NameValidator {
    static createValidator(playerService: PlayerService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
          return playerService
            .getPlayers()
            .pipe(
              map((players: Player[]) => players.some(p => p.name === control.value) ? { nameExists : true } : null
              )
            );
        };
      }
} 