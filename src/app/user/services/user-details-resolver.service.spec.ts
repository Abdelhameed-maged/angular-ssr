import { TestBed } from '@angular/core/testing';

import { UserDetailsResolverService } from './user-details-resolver.service';

describe('UserDetailsResolverService', () => {
  let service: UserDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
