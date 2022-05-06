import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class ShowCaseService {
  constructor() {}

  getApi(): Observable<any> {
     const data = [
      { name: 'name 1', price: 3, image: 'https://www.google.es' },
      { name: 'name 2', price: 4, image: 'https://www.google.es' },
      { name: 'name 3', price: 34, image: 'https://www.google.es' },
      { name: 'name 4', price: 300, image: 'https://www.google.es' },
      { name: 'name 5', price: 1, image: 'https://www.google.es' },
      { name: 'name 6', price: 6, image: 'https://www.google.es' },
      { name: 'name 7', price: 9, image: 'https://www.google.es' },
      { name: 'name 8', price: 5, image: 'https://www.google.es' },
  ];

  return of(data).pipe(delay(1500));
  }
}
