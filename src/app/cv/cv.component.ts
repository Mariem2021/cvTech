import { Component } from '@angular/core';
import { Personne } from '../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  personnes!: Personne[];
  selectedPersonne!: Personne;

  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'Aidara', 'Marie', 36, 'aidara.jpg', 777777, 'Designer'),
      new Personne(2, 'Merry', 'Merry', 38, 'marie.jpg', 8888555, 'Developper'),
    ]
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
 
}
