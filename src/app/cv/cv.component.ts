import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Personne } from '../model/Personne';
import { PremierService } from '../premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  personnes!: Personne[];
  selectedPersonne!: Personne;

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
    // this.premierService.addData('data from cv component');
    // this.premierService.logger(this.personnes);
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
 
}
