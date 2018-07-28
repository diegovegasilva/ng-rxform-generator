import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxFormMaterialGeneratorComponent } from './ng-rxform-material-generator.component';

describe('NgRxFormGeneratorComponent', () => {
  let component: NgRxFormMaterialGeneratorComponent;
  let fixture: ComponentFixture<NgRxFormGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxFormMaterialGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxFormMaterialGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
