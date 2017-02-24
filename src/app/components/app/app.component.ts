import { Component } from '@angular/core';
import { TemplateBindingComponent } from '../template-binding/template-binding.component';
import { PipeTesterPipe } from '../../pipes/pipe-tester.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string = "A value";
  temp: number;
  toCelsius: boolean = true;
  targetFormat: string = 'Celsius';
  format: string = 'FtoC'

  onInputEvent(event: Event): void {
    let inputElement: HTMLInputElement = <HTMLInputElement> event.target;

    console.log(`The input property value = ${inputElement.value}`);
    console.log(`The input attribute value = ${inputElement.getAttribute('value')}`);
    console.log(`The greeting property value = ${this.greeting}`);
  }

  toggleFormat(){
    this.toCelsius = !this.toCelsius;
    this.format = this.toCelsius ? 'FtoC' : 'CtoF';
    this.targetFormat = this.toCelsius ? 'Celsius' : 'Fahrenheit';
  }
}
