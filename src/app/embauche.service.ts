import { Injectable } from '@angular/core';
import { Personne } from './model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personne: Personne[];

  constructor() { 
    this.personne = [];
  }

  getEmbauchees(): Personne[] {
    return this.personne;
  }

  embaucher(personne: Personne) : void {
    const index = this.personne.indexOf(personne);
    if(index < 0) {
      this.personne.push(personne);
    }
    else {
      alert(`${personne.name} est deja selectionnée`);
    }
  }
  debaucher(personne: Personne) : void {
    const index = this.personne.indexOf(personne);
    if(index >= 0) {
      this.personne.splice(index, 1);
    }
  }
}
