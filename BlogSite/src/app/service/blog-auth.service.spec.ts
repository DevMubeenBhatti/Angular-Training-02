import { TestBed } from '@angular/core/testing';

import { BlogAuthService } from './blog-auth.service';

describe('BlogAuthService', () => {
  let service: BlogAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
