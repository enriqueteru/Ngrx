import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { catchError, EMPTY, EmptyError, map, mergeMap } from "rxjs";
import { ShowCaseService } from "src/app/modules/show-case/services/show-case.service";

import { types } from "../types/types";



@Injectable()
export class ItemsEffects { 




loadItems$ = createEffects(
  () => this.actions$.pipe(ofType(types.loadingItems)),
  mergeMap(()=>this._showCaseService.getApi().pipe(
  map(items => ({ type: types.loadedItems, items})))),
  catchError(()=>EMPTY)
  );



  constructor(
    private actions$: Actions,
    private _showCaseService: ShowCaseService
    ){}
}
