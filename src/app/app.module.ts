import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ObservableEventsComponent } from './components/observable-events/observable-events.component';

import { PipeTesterPipe } from './pipes/pipe-tester.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateBindingComponent,
    TwoWayBindingComponent,
    ObservableEventsComponent,
    PipeTesterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
