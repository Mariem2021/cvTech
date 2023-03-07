import { Injectable } from '@angular/core';
import { Personne } from './model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];

  constructor() { 

  this.personnes = [
      new Personne(1, 'Aidara', 'Marie', 36, 'aidara.jpg', 777777, 'Designer'),
      new Personne(2, 'Merry', 'Merry', 38, 'marie.jpg', 8888555, 'Developper'),
   ];
  }

  getPersonnes(): Personne[] { 
    return this.personnes;
  }
}
