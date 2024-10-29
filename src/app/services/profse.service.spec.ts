import { TestBed } from '@angular/core/testing';

import { ProfseService } from './profse.service';

describe('ProfseService', () => {
  let service: ProfseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
