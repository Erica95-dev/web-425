/*
 * Title: sign-in.service.spec
 * Author: Erica Perry
 * Date: Feb  9 2021
 * Description: sign-in.service.spec.ts */

import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
