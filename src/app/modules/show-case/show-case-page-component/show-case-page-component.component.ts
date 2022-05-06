import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/core/models/item.interface';
import { LoadedItems, loadingItems } from 'src/app/state/actions/items.actions';
import { SelectLoading } from 'src/app/state/selectors/item.selector';
import { ShowCaseService } from '../services/show-case.service';

@Component({
  selector: 'app-show-case-page-component',
  templateUrl: './show-case-page-component.component.html',
  styleUrls: ['./show-case-page-component.component.scss'],
})
export class ShowCasePageComponentComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>,
    private showCasePageService: ShowCaseService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(SelectLoading);
    this.store.dispatch(loadingItems());

    this.showCasePageService.getApi().subscribe((resp: ItemModel[])=>{
      this.store.dispatch(LoadedItems({items: resp}));
    });

  }
}
