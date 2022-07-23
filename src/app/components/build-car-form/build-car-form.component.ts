import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';
import { FormData } from 'src/models/FormData';
import { CustomCar } from 'src/models/CustomCar';

const myChoices = document.getElementById('displayInput') as HTMLInputElement | null;

@Component({
  selector: 'app-build-car-form',
  templateUrl: './build-car-form.component.html',
  styleUrls: ['./build-car-form.component.css']
})
export class BuildCarFormComponent implements OnInit, AfterViewInit {

  @Input() model: string;
  formData: FormData

  bodyDescription: string;
  driveTrainDescription: string;


  selectedBody: string;
  selectedGrade: string;
  selectedDrivetrain: string;
  selectedTransmission: string;
  selectedEngine: string;
  selectedExterior: string;
  selectedInterior: string;
  selectedWheels: string;
  additionalCost: number = 0;

  imgUrl: string;

  totalTabs: number;
  currentTab = 0;

  @ViewChild('formPrevBtn') formPrevBtn: ElementRef;
  @ViewChild('formNextBtn') formNextBtn: ElementRef;
  @ViewChild('formSubmitBtn') formSubmitBtn: ElementRef;
  @ViewChildren('tab') tabs: QueryList<any>;

  constructor(private service : FormService) {}

  ngOnInit(): void {
    this.service.getFormData(this.model).subscribe( (data) => 
    { console.log(data)
      this.formData = data});

    this.generateImgUrl();
  }

  ngAfterViewInit(): void {
    console.log(this.formPrevBtn)
    console.log(this.tabs)

    this.formSubmitBtn.nativeElement.style.display="none"
    this.showTab(this.currentTab);
    this.totalTabs = this.tabs.length;
    console.log(this.tabs.length)
  }

  selectBody($event: any){
    if ($event){
      this.selectedBody= $event
      console.log("output received")

      this.generateImgUrl();
    }
    console.log("PROCESSED: "+ this.selectedBody) ///YES
  }

  setBodyDescription($event: any){
    this.bodyDescription = $event;
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

  setDrivetrainDesc($event: any){
    this.driveTrainDescription = $event;
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

      this.generateImgUrl();
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

  selectWheels($event: any){
    if ($event){
      this.selectedWheels= $event
      console.log("output received")
    }
    console.log("PROCESSED: "+ this.selectedWheels)
  }

  onSubmit(){
    const customCar: CustomCar = {
      id: 0,
      body: this.selectedBody,
      grade: this.selectedGrade,
      driveTrain: this.selectedDrivetrain,
      transmission: this.selectedTransmission,
      engine: this.selectedEngine,
      exterior: this.selectedExterior,
      interior: this.selectedInterior,
      wheels: this.selectedWheels,
      additionalCost: this.additionalCost
    }
    
    console.log("=======Submission=======")
    console.log(this.selectedBody)
    console.log(this.selectedGrade)
    console.log(this.selectedDrivetrain)
    console.log(this.selectedTransmission)
    console.log(this.selectedEngine)
    console.log(this.selectedExterior)
    console.log(this.selectedInterior)
    console.log("=======Submission=======")


    this.service.submitForm(customCar).subscribe((result)=>{
      console.log(result);
    });
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
      this.formSubmitBtn.nativeElement.style.display="inline-block"

    } else {
      this.formNextBtn.nativeElement.style.display="inline-block";
      this.formSubmitBtn.nativeElement.style.display="none"
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

  generateImgUrl(){
    const baseUrl = "../../assets/img/";

    this.imgUrl = (baseUrl + this.model + "_" + this.selectedBody + "_" + this.selectedExterior + ".jpg").toLowerCase();
  
    console.log(this.imgUrl);
  }

}
