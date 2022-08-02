import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() currentValue: number;
  @Input() maxValue: number;
  
  constructor() { }

  ngOnInit(): void {
    this.maxValue = 0;
  }

}
