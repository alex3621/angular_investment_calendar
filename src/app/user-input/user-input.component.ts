import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInvestmentAmount = 0
  enteredAnnualInvestment = 0
  expectedReturn = 0
  duration = 0
  onSubmit(){
    console.log('entered :'+ this.enteredAnnualInvestment + this.duration )
  }
}
