import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentComponent } from './editmovie.component';

describe('EditstudentComponent', () => {
  let component: EditstudentComponent;
  let fixture: ComponentFixture<EditstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
