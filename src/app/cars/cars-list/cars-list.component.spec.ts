/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CarsListComponent } from './cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from '../cars.service';
import { Cars } from '../cars';
import { of } from 'rxjs';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;
  let debug: DebugElement;
  let serviceSpy: jasmine.SpyObj<CarsService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('CarsService', ['getCars']);

    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ CarsListComponent ],
      providers: [{ provide: CarsService, useValue: spy }]
    })
    .compileComponents();

    serviceSpy = TestBed.inject(CarsService) as jasmine.SpyObj<CarsService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;

    let cars: Array<Cars> = [];
    for (let i = 0; i < 3; i++) {
      const car = new Cars(
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.number.int(),
        faker.number.int(),
        faker.string.alpha(),
        faker.image.url(),
      );
      cars.push(car)
      component.cars.push(car);
    }

    serviceSpy.getCars.and.returnValue(of(cars));

    component.ngOnInit();
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr> elements + 1 <tr> header', () => {
    expect(debug.queryAll(By.css('tr.tr-row'))).toHaveSize(3);
    expect(debug.queryAll(By.css('tr.tr-header'))).toHaveSize(1);
  });
});
