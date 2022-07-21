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

  constructor() { }

  ngOnInit(): void {
  }

}
