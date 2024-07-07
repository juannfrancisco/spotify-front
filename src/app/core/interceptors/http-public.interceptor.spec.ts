import { TestBed } from '@angular/core/testing';

import { HttpPublicInterceptor } from './http-public.interceptor';

describe('HttpPublicInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpPublicInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpPublicInterceptor = TestBed.inject(HttpPublicInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
