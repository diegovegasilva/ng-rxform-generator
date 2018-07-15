import { TestBed, inject } from '@angular/core/testing';

import { NgRxformGeneratorService } from './ng-rxform-generator.service';

describe('NgRxformGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgRxformGeneratorService]
    });
  });

  it('should be created', inject([NgRxformGeneratorService], (service: NgRxformGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
