import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PorfolioService } from 'src/app/services/porfolio.service';

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
export class ExperienceComponent /* implements OnInit */{
  educationList:any
  constructor(private myData:PorfolioService) { }

  ngOnInit(): void {
    this.myData.getData().subscribe(data=>{
      this.educationList=data.education
    })
  }

  show:boolean = true;
}
