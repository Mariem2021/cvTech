import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {

 @Input()
  personne!: Personne;
@Output() selectedPersonne = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
      
  }

  selectPersonne() {
    // Todo emettre un evenement et y injecter la personne
    this.selectedPersonne.emit(
      this.personne
    );
  }


}
