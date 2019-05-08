import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoursesComponent } from './sourses.component';

describe('SoursesComponent', () => {
  let component: SoursesComponent;
  let fixture: ComponentFixture<SoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
