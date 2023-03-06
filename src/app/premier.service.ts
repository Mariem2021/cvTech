import { Injectable } from '@angular/core';
import { Personne } from './model/Personne';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  data = [
    'data1',
    'data2',
    'data3',
    'data4',
  ]

  constructor() { }

  logger(data: Personne[]) {
    console.log(this.data);
    console.log(data);
  }

  addData(data: string) {
    this.data.push(data);
  }
}
