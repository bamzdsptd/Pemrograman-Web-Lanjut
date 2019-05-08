import { TestBed } from '@angular/core/testing';

import { SoursesService } from './sourses.service';

describe('SoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoursesService = TestBed.get(SoursesService);
    expect(service).toBeTruthy();
  });
});
