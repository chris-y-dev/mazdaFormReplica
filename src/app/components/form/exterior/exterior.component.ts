import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styleUrls: ['./exterior.component.css']
})
export class ExteriorComponent implements OnInit {
  @Input() exteriorData: any;
  @Input() default: any;
  @Input() groupName: string;
  @Output() exteriorSelector = new EventEmitter();

  value: string;
  constructor() { }

  ngOnInit(): void {
    this.onSelect(this.default.name);
  }

  onSelect(value: string){
    this.exteriorSelector.emit(value);

    this.value = value;
    console.log(this.value)
  }

}
