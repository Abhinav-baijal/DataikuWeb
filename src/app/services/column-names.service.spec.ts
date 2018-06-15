import { TestBed, inject } from '@angular/core/testing';

import { ColumnNamesService } from './column-names.service';

describe('ColumnNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnNamesService]
    });
  });

  it('should be created', inject([ColumnNamesService], (service: ColumnNamesService) => {
    expect(service).toBeTruthy();
  }));
});
