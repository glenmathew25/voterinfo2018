import { TestBed, inject } from '@angular/core/testing';

import { GoogCivicService } from './goog-civic.service';

describe('GoogCivicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogCivicService]
    });
  });

  it('should be created', inject([GoogCivicService], (service: GoogCivicService) => {
    expect(service).toBeTruthy();
  }));
});
