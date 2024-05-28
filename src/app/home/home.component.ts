import { Component } from '@angular/core';
import { PersonListComponent } from '../person-list/person-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PersonListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users= [
      "Jhon",
     "Maria",
    "Admin",
     "pirates",
    "призрак",
    ]
    
    addUserToList(user: string) {
      console.log(user);
      
      this.users.push(user)
    }
}
