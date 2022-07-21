import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';
import { FormData } from 'src/models/FormData';

const myChoices = document.getElementById('displayInput') as HTMLInputElement | null;

@Component({
  selector: 'app-build-car-form',
  templateUrl: './build-car-form.component.html',
  styleUrls: ['./build-car-form.component.css']
})
export class BuildCarFormComponent implements OnInit {

  formData: FormData

  selectedBody: string;

  grade: string;

  selectedExterior: string;

  constructor(private service : FormService) { }

  ngOnInit(): void {
    this.service.getFormData().subscribe( (data) => 
    { console.log(data)
      this.formData = data});
  }


}
