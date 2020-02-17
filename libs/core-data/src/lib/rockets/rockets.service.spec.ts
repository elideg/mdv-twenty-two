import { TestBed } from '@angular/core/testing';

import { RocketsService } from './rockets.service';

describe('RocketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RocketsService = TestBed.get(RocketsService);
    expect(service).toBeTruthy();
  });
});
