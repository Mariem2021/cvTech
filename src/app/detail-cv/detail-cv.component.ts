import { Component, Input } from '@angular/core';
import { Personne } from '../model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent {

  @Input() personne!: Personne;
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit() {
    this.embaucheService.embaucher(this.personne);
  }
}
