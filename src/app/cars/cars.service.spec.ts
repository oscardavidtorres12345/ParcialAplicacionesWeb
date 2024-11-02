/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CarsService } from './cars.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Cars', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([CarsService], (service: CarsService) => {
    expect(service).toBeTruthy();
  }));
});
