import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code04patvicky',
  templateUrl: './code04patvicky.component.html',
  styleUrls: ['./code04patvicky.component.css']
})
export class Code04patvickyComponent implements OnInit {

  @Input() items: any
  constructor() { }

  ngOnInit(): void {
  }

}
