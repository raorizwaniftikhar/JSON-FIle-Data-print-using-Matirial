import { Component, Input, OnInit } from '@angular/core';
import { MyDetails } from '../patvickyInterfaces';

@Component({
  selector: 'app-code01patvicky',
  templateUrl: './code01patvicky.component.html',
  styleUrls: ['./code01patvicky.component.css']
})
export class Code01patvickyComponent implements OnInit {

  @Input() profile: MyDetails
  constructor() {
    this.profile = {}
  }

  ngOnInit(): void {
  }

}
