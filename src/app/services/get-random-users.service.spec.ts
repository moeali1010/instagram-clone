import { TestBed } from '@angular/core/testing';

import { GetRandomUsersService } from './get-random-users.service';

describe('GetRandomUsersService', () => {
  let service: GetRandomUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
