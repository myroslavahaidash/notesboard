import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveListDialogComponent } from './move-list-dialog.component';

describe('MoveListDialogComponent', () => {
  let component: MoveListDialogComponent;
  let fixture: ComponentFixture<MoveListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
