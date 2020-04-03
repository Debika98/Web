import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing-tables',
  templateUrl: './pricing-tables.component.html',
  styleUrls: ['./pricing-tables.component.css']
})
export class PricingTablesComponent implements OnInit {

  pricing = { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.pricing = this.getPricing();
  }

  getPricing() {
    return this.config.getConfig().pricing;
  }

}
