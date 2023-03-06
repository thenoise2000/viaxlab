import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class CreateActivityComponent {
  @Input() taskBDate: any;
  @Input() taskSDate: any;
  form = new FormGroup({
    name: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
  });
  error: string = "";
  activityId: number = 5;

  handleSubmit() {
    if (this.validateForm()) {
      this.activityId++
      const title = this.form.get("name")?.value;
      const BDate = this.form.get("start")?.value;
      const EDate = this.form.get("end")?.value;

      if (BDate && EDate) {
        const task = {
          activityId: this.activityId,
          title: title,
          type: "ACTIVITY",
          BDate: BDate,
          EDate: EDate,
          status: "DONE",
        };

        const formattedDate: any = `${new Date(BDate).getMonth() + 1}/${new Date(BDate).getDate()}`;

        if (!this.taskBDate[formattedDate]) {
          this.taskBDate[formattedDate] = [];
        }

        this.taskBDate[formattedDate].push(task);
      } else {
        const task = {
          activityId: this.activityId,
          title: title,
          type: "ACTIVITY",
          BDate: null,
          EDate: null,
          status: "DONE",
        };

        this.taskSDate.push(task);
      }

      this.form.reset()
    }
  }

  handleCloseTask() {    
    let addTask = document.getElementById("add-container")
    if (addTask) {
      addTask.className = "add-container disabled"
    }
  }

  validateForm() {    
    return this.form.get("name")?.value
  }
}
