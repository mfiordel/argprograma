import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { person } from '../../model/person.model'

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
person: person = new person("","","","","","");
 /*person:any*/

  constructor(private data:PorfolioService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      console.log(data);
      this.person = data;
    })
  }

}
