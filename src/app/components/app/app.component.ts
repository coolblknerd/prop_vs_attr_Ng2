import { Component } from '@angular/core';
import { TemplateBindingComponent } from '../template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string = "A value";

  onInputEvent(event: Event): void {
    let inputElement: HTMLInputElement = <HTMLInputElement> event.target;

    console.log(`The input property value = ${inputElement.value}`);
    console.log(`The input attribute value = ${inputElement.getAttribute('value')}`);
    console.log(`The greeting property value = ${this.greeting}`);
  }
}
