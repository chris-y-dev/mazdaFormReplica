import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Grade } from 'src/models/Grade';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardData: any;
  @Input() default: string;
  @Input() groupName: string;
  @Output() chosenCard = new EventEmitter();

  value: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.default)
    this.selectionChange(this.default)
    console.log("Initial " + this.default)
  }

  selectionChange(value: string){
    this.chosenCard.emit(value);
    this.value = value;
    console.log("Choice change")
    console.log(this.value)
    console.log(this.groupName);
  }

  onClick(){
    console.log(this.value)
  }


}
