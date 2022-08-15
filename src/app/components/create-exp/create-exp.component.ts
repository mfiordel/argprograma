import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience.model';
import { ContextService } from 'src/app/services/context.service';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-create-exp',
  templateUrl: './create-exp.component.html',
  styleUrls: ['./create-exp.component.css']
})
export class CreateExpComponent implements OnInit {

  experience!: Experience;
  name_school!: String;
  is_actually!: boolean;
  initial_date!: Date;
  end_date!: Date;
  description!: String;
  url_img!: String;
  style!: String;

  constructor(private router: Router, private porfolioService: PorfolioService, private contextService: ContextService) { }

  ngOnInit(): void {
  }

  discard() {
    window.location.reload();
  }

  createExp(): void {
    try{
      this.experience = new Experience(this.name_school, this.is_actually, this.initial_date, this.end_date, this.description, this.url_img, this.style);
      this.porfolioService.createExperience(this.experience).subscribe();
    }
    finally{
      setTimeout(function(){
        window.location.reload();
      },3000);
    }
    
    //window.location.reload();
    
  }
  
}
