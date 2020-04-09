/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrialService } from './trial/trial.service';

describe('Service: TrialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrialService]
    });
  });

  it('should ...', inject([TrialService], (service: TrialService) => {
    expect(service).toBeTruthy();
  }));
});
