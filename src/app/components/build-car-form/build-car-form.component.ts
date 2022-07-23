import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';
import { FormData } from 'src/models/FormData';

const myChoices = document.getElementById('displayInput') as HTMLInputElement | null;

@Component({
  selector: 'app-build-car-form',
  templateUrl: './build-car-form.component.html',
  styleUrls: ['./build-car-form.component.css']
})
export class BuildCarFormComponent implements OnInit, AfterViewInit {

  formData: FormData

  selectedBody: string;

  selectedGrade: string;

  selectedDrivetrain: string;

  selectedTransmission: string;

  selectedEngine: string;

  selectedExterior: string;

  selectedInterior: string;

  currentTab = 0;

  @ViewChild('formPrevBtn') formPrevBtn: ElementRef;
  @ViewChild('formNextBtn') formNextBtn: ElementRef;
  @ViewChildren('tab') tabs: QueryList<any>;

  constructor(private service : FormService) {}

  ngOnInit(): void {
    this.service.getFormData().subscribe( (data) => 
    { console.log(data)
      this.formData = data});

    // this.showTab(this.currentTab)
  }

  ngAfterViewInit(): void {
    console.log(this.formPrevBtn)
    console.log(this.tabs)

    this.showTab(this.currentTab);
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




  showTab(n: number){
    this.tabs.get(n).nativeElement.style.display="block";

    //change buttons depending on page
    if (n == 0){
      this.formPrevBtn.nativeElement.style.display="none";
    } else {
      this.formPrevBtn.nativeElement.style.display="inline-block";
    }

    if (n == (this.tabs.length-1)){
      this.formNextBtn.nativeElement.style.display="none";

    } else {
      this.formNextBtn.nativeElement.style.display="inline-block";
    }

    //change step indicator
  }

  hideTab(n: number){
    this.tabs.get(n).nativeElement.style.display="none";
  }

  nextOrPrev(n: number){

    //HIDE
    this.hideTab(this.currentTab);

    this.currentTab += n;
    
    //SHOW
    this.showTab(this.currentTab);
    console.log(this.currentTab)
  }

}
