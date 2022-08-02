<<<<<<< HEAD
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';
import { FormData } from 'src/models/FormData';
import { CustomCar } from 'src/models/CustomCar';

const myChoices = document.getElementById('displayInput') as HTMLInputElement | null;
=======
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';
import { FormData } from 'src/models/FormData';
import { CustomCar } from 'src/models/CustomCar';
import { ActivatedRoute } from '@angular/router';

>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5

@Component({
  selector: 'app-build-car-form',
  templateUrl: './build-car-form.component.html',
  styleUrls: ['./build-car-form.component.css']
})
export class BuildCarFormComponent implements OnInit, AfterViewInit {

<<<<<<< HEAD
  @Input() model: string;
  formData: FormData
=======
  model: string = "mazda3"
  formData: FormData
  bodyData: any;
  additionData: any;
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5

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

  constructor(private service : FormService, private activatedRoute: ActivatedRoute, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    //retrieve values from URL parameter
    this.model = this.activatedRoute.snapshot.params['carModel'];

    //Retrieve from API + assign to variable
    this.service.getFormData(this.model).subscribe( (data) => 
    { console.log(data)
      this.formData = data
      this.bodyData = data.body //this conditionally renders Body
    });
    
    //generate default image
    this.generateImgUrl();
  }

  //sets dispaly after all DOM elements loaded
  //Default = No 'submit' button, show current tab, calculate total tabs.
  ngAfterViewInit(): void {
    this.formSubmitBtn.nativeElement.style.display="none" 
    this.showTab(this.currentTab);

    
    this.totalTabs = this.tabs.length;

    // import changeDetector -> Detects changes after initialising the view: ie the tab count was initially UNDEFINED -> But changed to 7 or 8 after view is mounted
    this.changeDetector.detectChanges();
  }

  /* Following functions retrieves the chosen form items + assigns to variable in this class*/

  selectBody($event: any){
    if ($event){
      this.selectedBody= $event
      this.generateImgUrl();
    }
    console.log("PROCESSED: "+ this.selectedBody) 
  }

  setBodyDescription($event: any){
    this.bodyDescription = $event;
  }

  selectGrade($event: any){
    if ($event){
      this.selectedGrade=$event
<<<<<<< HEAD
      console.log("output received")
    }
    console.log(this.selectedGrade)
=======
    }
    console.log("PROCESSED: " + this.selectedGrade)
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
  }

  selectDrivetrain($event: any){
    if ($event){
      this.selectedDrivetrain= $event
<<<<<<< HEAD
      console.log("output received")
=======
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
    }
    console.log("PROCESSED: "+ this.selectedDrivetrain)
  }

  setDrivetrainDesc($event: any){
    this.driveTrainDescription = $event;
  }

  selectTransmission($event: any){
    if ($event){
      this.selectedTransmission= $event
<<<<<<< HEAD
      console.log("output received")
=======
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
    }
    console.log("PROCESSED: "+ this.selectedTransmission)
  }

  selectEngine($event: any){
    if ($event){
      this.selectedEngine= $event
<<<<<<< HEAD
      console.log("output received")
=======
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
    }
    console.log("PROCESSED: "+ this.selectedEngine)
  }

  selectExterior($event: any){
    if ($event){
      this.selectedExterior= $event
<<<<<<< HEAD
      console.log("output received")
=======
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5

      this.generateImgUrl();
    }
    console.log("PROCESSED: "+ this.selectedExterior)
  }

  selectInterior($event: any){
    if ($event){
      this.selectedInterior= $event
<<<<<<< HEAD
      console.log("output received")
=======
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
    }
    console.log("PROCESSED: "+ this.selectedInterior)
  }

  selectWheels($event: any){
    if ($event){
      this.selectedWheels= $event
<<<<<<< HEAD
      console.log("output received")
=======
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
    }
    console.log("PROCESSED: "+ this.selectedWheels)
  }

<<<<<<< HEAD
=======
  //This retrieves all selected values -> turn into Object -> call SERVICE
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
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
<<<<<<< HEAD
    console.log(this.selectedBody)
    console.log(this.selectedGrade)
    console.log(this.selectedDrivetrain)
    console.log(this.selectedTransmission)
    console.log(this.selectedEngine)
    console.log(this.selectedExterior)
    console.log(this.selectedInterior)
=======
    console.log(customCar)
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
    console.log("=======Submission=======")


    this.service.submitForm(customCar).subscribe((result)=>{
      console.log(result);
    });
  }


<<<<<<< HEAD


=======
  //this changes the display depending on currentTab (block or none)
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
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
<<<<<<< HEAD

    //change step indicator
  }

=======
  }

  //this hides a tab
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
  hideTab(n: number){
    this.tabs.get(n).nativeElement.style.display="none";
  }

<<<<<<< HEAD
=======
  //Logic to determine tab number
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
  nextOrPrev(n: number){
    //HIDE
    this.hideTab(this.currentTab);
    this.currentTab += n;
    
    //SHOW
    this.showTab(this.currentTab);
<<<<<<< HEAD
    console.log(this.currentTab)
  }

  generateImgUrl(){
    const baseUrl = "../../assets/img/";

    this.imgUrl = (baseUrl + this.model + "_" + this.selectedBody + "_" + this.selectedExterior + ".jpg").toLowerCase();
  
    console.log(this.imgUrl);
  }

=======
    console.log("Progress bar: " + this.currentTab)
  }

  //takes input information and displays the corresponding image dynamically
  generateImgUrl(){
    let baseUrl = "../../assets/img/";

    if (this.model){
      baseUrl += this.model + "/" + this.model + "_"
    } 

    if (this.selectedBody){
      baseUrl += this.selectedBody + "_"
    }

    this.imgUrl = (baseUrl += this.selectedExterior + ".jpg").toLowerCase();
  
    console.log(this.imgUrl);
  }
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
}
