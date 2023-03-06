import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class ActivitiesComponent {

  @Input() taskBDate: any;
  @Input() taskSDate: any;
  form = new FormGroup({
    DateStar: new FormControl(''),
    DateEnd: new FormControl(''),
  });

  editActivityId: number | null = null;

  ngOnInit() {
  }

  getDates(obj: any) {
    return Object.keys(obj);
  }

  getHour(date: string) {
    let pDate = new Date(date);
    let clock = pDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return clock
  }

  handleTaskDelete(activityId: number): void {
    for (const k of Object.keys(this.taskBDate)) {
      const tasks = this.taskBDate[k];
      const i = tasks.findIndex((activity: any) => activity.activityId === activityId);
      if (i !== -1) {
        tasks.splice(i, 1);
        break;
      }
    }

    const i = this.taskSDate.findIndex((activity: any) => activity.activityId === activityId);
    if (i !== -1) {
      this.taskSDate.splice(i, 1);
    }
  }

  handleTaskEdit(taskId: number) {
    this.editActivityId = taskId;
  }

  handleTaskUpdate(taskId: number) {
    const DateStar = this.form.get('DateStar')?.value;
    const DateEnd = this.form.get('DateEnd')?.value;

    for (const date in this.taskBDate) {
      const tasks = this.taskBDate[date];
      const i = tasks.findIndex((activity: any) => activity.taskId === taskId);
      if (i !== -1) {
        if (!DateEnd || !DateEnd) {
          this.taskBDate[date][i].BDate = null;
          this.taskBDate[date][i].EDate = null;
          
          this.taskSDate.push(this.taskBDate[date][i])
          
          this.taskBDate[date].splice(i, 1)
        } else {
          this.taskBDate[date][i].BDate = DateStar;
          this.taskBDate[date][i].EDate = DateEnd;
          if (DateStar) {
            let parsedDate: string = (DateStar.split("T")[0].split("-").slice(1, 3).join("/"))
            if (this.taskBDate[parsedDate]) {
              this.taskBDate[parsedDate].push(this.taskBDate[date][i])
            } else {
              this.taskBDate[parsedDate] = [this.taskBDate[date][i]]
            }
            this.taskBDate[date].splice(i, 1)
          }
        }
        break;
      }
    }

    this.cancelEdit();
  }

  handleTaskUpdateE(taskId: number) {
    const DateStar = this.form.get('DateStar')?.value;
    const DateEnd = this.form.get('DateEnd')?.value;

    const i = this.taskSDate.findIndex((activity: any) => activity.taskId === taskId);
    const task = this.taskSDate[i]


    if (DateStar && DateEnd) {
      let parsedDate: string = (DateStar.split("T")[0].split("-").slice(1, 3).join("/"))
      if (this.taskBDate[parsedDate]) {
        this.taskBDate[parsedDate].push(task)
      } else {
        this.taskBDate[parsedDate] = [task]
      }
    }

    this.taskSDate.splice(i, 1)

    this.cancelEdit()
  }

  cancelEdit() {
    this.editActivityId = null;
  }

  isEditing(taskId: number) {
    return this.editActivityId === taskId;
  }

  handleCreateActivity() {
    let addTasks = document.getElementById("add-container")
    if (addTasks) {
      addTasks.className = "add-container"
    }
  }

}
