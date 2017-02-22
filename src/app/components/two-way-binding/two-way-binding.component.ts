import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  lastStockSymbol: string;

  constructor() {
    setTimeout(() => {
      this.lastStockSymbol="AAPL";
    }, 2000);
  }
}
