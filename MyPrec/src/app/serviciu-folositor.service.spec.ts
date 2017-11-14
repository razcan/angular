import { TestBed, inject } from '@angular/core/testing';

import { ServiciuFolositorService } from './serviciu-folositor.service';

describe('ServiciuFolositorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciuFolositorService]
    });
  });

  it('should be created', inject([ServiciuFolositorService], (service: ServiciuFolositorService) => {
    expect(service).toBeTruthy();
  }));
});
