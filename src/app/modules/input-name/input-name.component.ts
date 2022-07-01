import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addName } from 'src/app/shared/+ state/name/name.actions';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
})
export class InputNameComponent {
  inputName = new FormControl('');

  constructor(private store: Store) {}

  addName() {
    if (this.inputName.value) {
      this.store.dispatch(addName({ name: this.inputName.value }));
      this.inputName.reset();
    }
  }
}
