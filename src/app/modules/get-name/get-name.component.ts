import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, switchMap } from 'rxjs';

import { filterName } from './../../shared/+ state/name/name.selectors';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.scss'],
})
export class GetNameComponent implements OnInit {
  filterNameInput = new FormControl('');
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.filterNameInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((value) => this.store.select(filterName(value)))
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
