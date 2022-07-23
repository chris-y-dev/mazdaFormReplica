import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormData } from 'src/models/FormData';
import { Body } from 'src/models/Body';



@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.css']
})
export class ButtonBlockComponent implements OnInit {
  @Input() choices: any;
  @Input() groupName: string;
  @Output() valueChosen: EventEmitter<string> = new EventEmitter();
  @Output() currentDescription: EventEmitter<string> = new EventEmitter();

  @Input() value: string;
  @Input() default: any;

  chosenDesc: string;

  constructor() { 
  }

  ngOnInit(): void {
    this.selectionChange(this.default)
  }

  selectionChange(value: any){
    this.valueChosen.emit(value.name)
    this.currentDescription.emit(value.description)
    this.value = value.name;
    console.log("Choice change")
    this.chosenDesc = value.description;
    // console.log(this.groupName)
  }

  onClick(value: string){
    console.log(value)
  }
}
