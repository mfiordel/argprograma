import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/services/porfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data:PorfolioService, private router:Router) { }

  ngOnInit(): void {
    this.data.getData();
  }

  login(){
    this.router.navigate(['login'])
  }
}
