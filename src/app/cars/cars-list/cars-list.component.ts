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
  brandCounts: { [key: string]: number } = {};

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars(): void {
    this.service.getCars().subscribe((cars) => {
      this.getCars(cars);
      this.countCarsByBrand();
    });
  }

  getCars(cars: Array<Cars>) {
    this.cars = cars;
  }

  countCarsByBrand(): void {
    this.brandCounts = {}; // Reset counts

    // Iterate over the cars array and count each brand
    this.cars.forEach((car) => {
      if (car.marca) {
        if (!this.brandCounts[car.marca]) {
          this.brandCounts[car.marca] = 0;
        }
        this.brandCounts[car.marca]++;
      }
    });
  }

  getBrandKeys(): Array<string> {
    return Object.keys(this.brandCounts);
  }

}
