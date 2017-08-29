import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveNoteDialogComponent } from './move-note-dialog.component';

describe('MoveNoteDialogComponent', () => {
  let component: MoveNoteDialogComponent;
  let fixture: ComponentFixture<MoveNoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveNoteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
