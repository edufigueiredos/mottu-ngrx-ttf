import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNameComponent } from './get-name.component';

describe('GetNameComponent', () => {
  let component: GetNameComponent;
  let fixture: ComponentFixture<GetNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
