import { Component, Input, OnInit } from '@angular/core';
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

  selectedGrade: string;

  selectedDrivetrain: string;

  selectedTransmission: string;

  selectedEngine: string;

  selectedExterior: string;

  selectedInterior: string;

  constructor(private service : FormService) { }

  ngOnInit(): void {
    this.service.getFormData().subscribe( (data) => 
    { console.log(data)
      this.formData = data});
  }

  selectBody($event: any){
    if ($event){
      this.selectedBody= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedBody) ///YES
  }

  selectGrade($event: any){
    if ($event){
      this.selectedGrade=$event
      console.log("output received")
    }
    console.log(this.selectedGrade)
  }

  selectDrivetrain($event: any){
    if ($event){
      this.selectedDrivetrain= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedDrivetrain)
  }

  selectTransmission($event: any){
    if ($event){
      this.selectedTransmission= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedTransmission)
  }

  selectEngine($event: any){
    if ($event){
      this.selectedEngine= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedEngine)
  }

  selectExterior($event: any){
    if ($event){
      this.selectedExterior= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedExterior)
  }

  selectInterior($event: any){
    if ($event){
      this.selectedInterior= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedInterior)
  }

  onSubmit(){
    console.log(this.selectedBody)
    console.log(this.selectedGrade)
    console.log(this.selectedDrivetrain)
    console.log(this.selectedTransmission)
    console.log(this.selectedEngine)
    console.log(this.selectedExterior)
    console.log(this.selectedInterior)
  }

}
