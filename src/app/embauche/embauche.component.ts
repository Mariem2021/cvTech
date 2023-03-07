import { Component, OnInit } from '@angular/core';
import { EmbaucheService } from '../embauche.service';
import { Personne } from '../model/Personne';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {

  personnes: Personne[] = [];

  constructor(private embaucheService: EmbaucheService) {

  }
  ngOnInit() {
    this.personnes = this.embaucheService.getEmbauchees();
      
  }
}
