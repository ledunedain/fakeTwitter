import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulaFakeTwitter';
  name = 'Julian Vargas';
  num1 = 2;
  num2 = 3;
  resultSuma: number;

  constructor (){
    console.log("constructor .... appComponent created");
  }



  sumar(){
    console.log('sumar');
    this.resultSuma = this.num1 + this.num2; 
  }
}
