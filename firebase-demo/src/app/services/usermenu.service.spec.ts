import { TestBed } from '@angular/core/testing';

import { UsermenuService } from './usermenu.service';

describe('UsermenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsermenuService = TestBed.get(UsermenuService);
    expect(service).toBeTruthy();
  });
});
