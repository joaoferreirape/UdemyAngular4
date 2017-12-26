import { Component, Output, EventEmitter } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'leia', isJedi: false},
    {name: 'Han solo', isJedi: false}
  ]

  @Output() myEvent = new EventEmitter()

  clicked(event): void {
    console.log(`button clicked: ${event}`)
  }
  keyDown(event): void {
    console.log(`key down: ${event}`)
  }
  willBeCalled(): void {
    this.myEvent.emit()
    console.log('Event from clickable')
  }
}
