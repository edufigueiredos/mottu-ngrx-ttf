import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NameState } from './shared/+ state/name/name-state.model';
import { getLastName, getNames } from './shared/+ state/name/name.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  lastName$ = this.store.select(getLastName);

  constructor(private store: Store<NameState>) {}
}
