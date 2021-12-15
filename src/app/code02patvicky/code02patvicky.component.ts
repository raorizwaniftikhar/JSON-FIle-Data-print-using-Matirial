import { Component, Input, OnInit } from '@angular/core';
import { MyDetails } from '../patvickyInterfaces';

@Component({
  selector: 'app-code02patvicky',
  templateUrl: './code02patvicky.component.html',
  styleUrls: ['./code02patvicky.component.css']
})
export class Code02patvickyComponent implements OnInit {

  randomId = 1;

  getId(number: string) {
    return parseInt(number)
  }

  @Input() profile: MyDetails

  constructor() {
    this.profile = {}
  }
  ngOnInit(): void {
  }

}
