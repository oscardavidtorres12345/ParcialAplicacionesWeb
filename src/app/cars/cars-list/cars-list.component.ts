import { Component, OnInit } from '@angular/core';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Array<Cars> = [];

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars(): void {
    this.service.getCars().subscribe((cars) => {
      this.getCars(cars);
    });
  }

  getCars(cars: Array<Cars>) {
    this.cars = cars;
  }

}
