import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../patvickyInterfaces';

@Component({
  selector: 'app-code03patvicky',
  templateUrl: './code03patvicky.component.html',
  styleUrls: ['./code03patvicky.component.css']
})
export class Code03patvickyComponent implements OnInit {

  @Input() company: Company
  constructor() {
    this.company = {}
  }

  ngOnInit(): void {
  }

  output!: string;

  displayJSON() {
    // "BusinessNumber": "991622002",
    // "President": "Vicky patel",
    // "Location": "Enter your Sheridan Home Campus HERE",
    // "HelpDesk": "Enter your Sheridan Email address HERE"


    this.output = `<h3> company buisness number is ${this.company.BusinessNumber} </h3>`;
    this.output += `<h3> company president is ${this.company.President} </h3>`;
    this.output += `<h3> company location is ${this.company.Location} </h3>`;
    this.output += `<h3> company help desk is ${this.company.HelpDesk} </h3>`;



  }
}