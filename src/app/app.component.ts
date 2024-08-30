import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserEntry } from './user-input/user-input.model';

interface YearlyData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  private result: YearlyData[] = [];
  calculated=false;
  submitted(data : UserEntry)
  {
    this.result = this.calculateInvestmentResults(data.enteredInvestmentAmount, data.enteredAnnualInvestment, data.expectedReturn, data.duration);
    this.calculated=true
  }
  calculateInvestmentResults(initialInvestment : number, annualInvestment:number, expectedReturn:number,duration:number ) {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    return annualData;
  }
}
