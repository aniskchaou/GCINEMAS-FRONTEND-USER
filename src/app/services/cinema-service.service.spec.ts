import { TestBed } from '@angular/core/testing';

import { CinemaService } from './cinema-service.service';

describe('CinemaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemaService = TestBed.get(CinemaService);
    expect(service).toBeTruthy();
  });
});
