import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() itinerario: string = "";

  handleCreateActivity() {    
    let addTask = document.getElementById("add-container")
    if (addTask) {
      addTask.className = "add-container"
    }
  }
}
