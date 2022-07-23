import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.css']
})
export class CustomImageComponent implements OnInit {



  @Input() srcPath: string;

  constructor() { }

  ngOnInit(): void {
  }

 



}
