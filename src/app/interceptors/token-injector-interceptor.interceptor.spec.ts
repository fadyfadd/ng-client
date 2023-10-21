import { TestBed } from '@angular/core/testing';

import { TokenInjectorInterceptor} from './token-injector-interceptor.interceptor';

describe('TokenInjectorInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInjectorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInjectorInterceptor = TestBed.inject(TokenInjectorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
