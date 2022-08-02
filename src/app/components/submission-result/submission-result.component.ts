import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';
import { ActivatedRoute } from '@angular/router';
import { CustomCar } from 'src/models/CustomCar';

@Component({
  selector: 'app-submission-result',
  templateUrl: './submission-result.component.html',
  styleUrls: ['./submission-result.component.css']
})
export class SubmissionResultComponent implements OnInit {


  submittedCarData : CustomCar;
  imgUrl : string;

  constructor(private service: FormService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id'])

    //retrieve submission ID to get car data
    this.service.retrieveSubmission(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      console.log(data)
      this.submittedCarData = data;
      this.generateImgUrl();
    })

   
  }

  generateImgUrl(){

    let imgUrl = ""

    imgUrl+= "../../assets/img/" + this.submittedCarData.model + "/"

    imgUrl += this.submittedCarData.model + "_"

    if (this.submittedCarData.body != undefined){
      imgUrl += this.submittedCarData.body+"_"
    }

    imgUrl += this.submittedCarData.exterior + ".jpg"

    this.imgUrl = imgUrl.toLowerCase();

    console.log(this.imgUrl)
  }

}
