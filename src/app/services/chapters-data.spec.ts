import { TestBed } from '@angular/core/testing';

import { ChaptersDataService } from './chapters-data';

describe('ChaptersDataService', () => {
  let service: ChaptersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaptersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
