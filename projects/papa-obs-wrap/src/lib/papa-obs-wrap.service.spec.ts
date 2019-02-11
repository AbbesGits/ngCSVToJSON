import { TestBed } from '@angular/core/testing';

import { PapaObsWrapService } from './papa-obs-wrap.service';

describe('PapaObsWrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PapaObsWrapService = TestBed.get(PapaObsWrapService);
    expect(service).toBeTruthy();
  });
});
