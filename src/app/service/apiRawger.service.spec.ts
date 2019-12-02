import { TestBed } from '@angular/core/testing';

import { ApiRawgerService } from './apiRawger.service';

describe('ApiRawgerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRawgerService = TestBed.get(ApiRawgerService);
    expect(service).toBeTruthy();
  });
});
