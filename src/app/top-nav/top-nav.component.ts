import { Component, OnInit } from '@angular/core';
import messages from 'src/app/messages';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  messages:any[]= [];
  constructor() { }

  ngOnInit() {
    this.messages=messages;
  }

}
