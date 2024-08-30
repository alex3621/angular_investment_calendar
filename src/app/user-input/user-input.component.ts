import { Component, Output , EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type UserEntry } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() data = new EventEmitter<UserEntry>();
  enteredInvestmentAmount = 0
  enteredAnnualInvestment = 0
  expectedReturn = 0
  duration = 0
  onSubmit(){
    console.log({
      enteredInvestmentAmount :this.enteredInvestmentAmount,
      enteredAnnualInvestment : this. enteredAnnualInvestment,
      expectedReturn :this.expectedReturn,
      duration : this.duration 
    })
    this.data.emit({
      enteredInvestmentAmount :this.enteredInvestmentAmount,
      enteredAnnualInvestment : this. enteredAnnualInvestment,
      expectedReturn :this.expectedReturn,
      duration : this.duration 
    }) 
  }
}
