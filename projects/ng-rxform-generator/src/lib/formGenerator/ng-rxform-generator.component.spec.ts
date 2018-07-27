import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxFormGeneratorComponent } from './ng-rxform-generator.component';

describe('NgRxFormGeneratorComponent', () => {
  let component: NgRxFormGeneratorComponent;
  let fixture: ComponentFixture<NgRxFormGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxFormGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
