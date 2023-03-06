import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  itinerario: string = "Bariloche 2022"

  private tasksWeb = 'http://localhost:3001/activities';
  taskBDate: any = {};
  taskSDate: Array<any> = [];
  createActivity: boolean = false;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    return this.http.get<any[]>(this.tasksWeb)
      .subscribe(data => {
        data.forEach(task => {
          if (!task.BDate) {
            this.taskSDate.push(task)
          } else {
            const date = new Date(task.BDate);
            const formattedDate: any = `${date.getDay() + 1}/${date.getMonth()+1}`;
            if (!this.taskBDate[formattedDate]) {
              this.taskBDate[formattedDate] = [];
            }
            this.taskBDate[formattedDate].push(task);
          }
        })
      });
  }
}
