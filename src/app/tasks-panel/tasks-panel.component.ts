import { Component, OnInit } from '@angular/core';
import tasks from 'src/app/tasks';
@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit {
  tasks:any[]= [];
  constructor() { }

  ngOnInit() {
    this.tasks=tasks;
  }

}
