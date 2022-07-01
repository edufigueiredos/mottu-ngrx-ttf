import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNames } from 'src/app/shared/+ state/name/name.selectors';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.scss']
})
export class ListNameComponent {

  nameList$ = this.store.select(getNames);
  constructor(private store: Store) { }

}
