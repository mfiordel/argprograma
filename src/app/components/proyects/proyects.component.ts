import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
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
export class ProyectsComponent implements OnInit {
  proyectList:any

  constructor(private data: PorfolioService) { }

  ngOnInit(): void {
    /* Subscripción JSON */
    this.data.getLocalData().subscribe(data=>{
      this.proyectList=data.proyect
    })
  }

  show:boolean = false;
  
  }
