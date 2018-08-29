import { TestBed, inject } from '@angular/core/testing';

import { ModifierCalculationsService } from './modifier-calculations.service';

describe('ModifierCalculationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModifierCalculationsService]
    });
  });

  it('should be created', inject([ModifierCalculationsService], (service: ModifierCalculationsService) => {
    expect(service).toBeTruthy();
  }));
});
