import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Grade } from 'src/models/Grade';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carouselData: any;
  @Input() groupName: string;
  @Input() slides: number;
  @Output() chosenValue: EventEmitter<string> = new EventEmitter();

  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCard($event: any){
    this.value = $event;
    this.chosenValue.emit(this.value);
    console.log("Passing")
  }

}
