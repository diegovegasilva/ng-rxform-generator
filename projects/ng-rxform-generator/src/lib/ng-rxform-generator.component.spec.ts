import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxformGeneratorComponent } from './ng-rxform-generator.component';

describe('NgRxformGeneratorComponent', () => {
  let component: NgRxformGeneratorComponent;
  let fixture: ComponentFixture<NgRxformGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxformGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxformGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
