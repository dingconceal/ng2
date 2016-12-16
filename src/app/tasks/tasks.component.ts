import { TaskService } from './tasks.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskservice:TaskService) { 
      this.taskservice.getTasks()
          .subscribe(tasks => {
              console.log(tasks);
          });
  }

 

  ngOnInit() {
  }

}
