import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { experience } from '../../model/experience.model'
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [ 
            style({ opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ opacity: 0 })),
          ]
          
        )
      ]
    )
  ]
})
export class ExperienceComponent implements OnInit{
  experience: any;
  date: any;
 /*person:any*/

  constructor(private data:PorfolioService) { }

  ngOnInit(): void {
    this.data.getExperience().subscribe(data => {
      console.log(data);
        this.experience = data; 
        /* Averiguar Parse Date
        this.experience.initial_date = new Date(this.experience.initial_date)
        */ 
    })
  }

  /* Subscripción JSON
  educationList:any
  constructor(private myData:PorfolioService) { }

  ngOnInit(): void {
    this.myData.getData().subscribe(data=>{
      this.educationList=data.education
    })
  }*/

  show:boolean = true;
}
