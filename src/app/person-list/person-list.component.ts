import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  @Input() persons: any[] = [];
  @Output() newUser = new EventEmitter<string>
  person: string =''
  ngOnInit(): void {
 }
 addUser() {
  this.newUser.emit(this.person) 
  this.person = ''
 }
}
