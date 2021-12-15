import { Component, OnInit } from '@angular/core';
import { LocalDataReadService } from './local.service';
import { Company, MyDetails } from './patvickyInterfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tuesdayReview';
  profile: MyDetails
  company: Company
  items: any
  constructor(private LocalDataReadService: LocalDataReadService) {
    this.profile = {}
    this.company = {}
  }

  ngOnInit() {
    this.LocalDataReadService.getJSON().subscribe(data => {
      this.profile = data.myDetails
      this.company = data.Company
      this.items = data.RetailData
      console.log('🚀', data)
    })
  }
}
