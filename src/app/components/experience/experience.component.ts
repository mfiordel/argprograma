import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { TokenService } from 'src/app/services/token.service';
import { CreateExpComponent } from '../create-exp/create-exp.component';
import { Experience } from 'src/app/model/experience.model';


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
export class ExperienceComponent implements OnInit {
  edit: boolean = false;
  experience: any;
  date: any;
  createExp: boolean = false;
  idExp!: any;
  objectExp!: Experience;

  name_school!: String;
  is_actually!: boolean;
  initial_date!: Date;
  end_date!: Date;
  description!: String;
  url_img!: String;
  style!: String;

  constructor(private data: PorfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.data.getExperience().subscribe(data => {
      this.experience = data;
    })
    if (this.tokenService.getToken()) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  deleteExp(): void {
    try {
      this.data.deleteExperience(this.idExp).subscribe();
    }
    finally {
      window.location.reload();
      this.idExp = null;
    }
  }

  editNameExp(): void {
  
    try {
      this.data.editExperience(this.idExpObj, this.name_school).subscribe();
    }
    finally {
      window.location.reload();
    }
  }

  editDescExp(): void {
    try {
      this.data.editDescriptionExperience(this.idExpObj, this.description).subscribe();
    }
    finally {
      window.location.reload();
    }
  }
  editInitDateExp(): void {
    try {
      this.data.editInitialDateExperience(this.idExpObj, this.initial_date).subscribe();
    }
    finally {
      window.location.reload();
    }
  }
  editEndDateExp(): void {
    try {
      this.data.editEndDateExperience(this.idExpObj, this.end_date).subscribe();
    }
    finally {
      window.location.reload();
    }
  }
  editUrlImgExp(): void {
    try {
      this.data.editUrlImgExperience(this.idExpObj, this.url_img, this.style).subscribe();
    }
    finally {
      window.location.reload();
    }
  }
  

  show: boolean = false;
  currently: boolean = true;
  showNameExpInput: boolean = false;
  idExpObj!: any;
  showEditBtns: boolean = false;
  showDescriptionExpInput: boolean = false;
  showInitDateExpInput: boolean = false;
  showEndDateExpInput: boolean = false;
  showUrlImgExpInput: boolean = false;
  /* Averiguar Parse Date
        this.experience.initial_date = new Date(this.experience.initial_date)
  */

  /* Subscripción JSON
  educationList:any
  constructor(private myData:PorfolioService) { }

  ngOnInit(): void {
    this.myData.getData().subscribe(data=>{
      this.educationList=data.education
    })
  }*/
}
