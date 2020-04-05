import { Component, OnInit } from '@angular/core';
import orders from "src/app/orders";

@Component({
  
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.css']
})
export class TransactionsPanelComponent implements OnInit {
  orders:any[]= [];
  constructor() { }

  ngOnInit() {
   this.orders= orders;
  }

}
