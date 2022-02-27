import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyModule } from './input-property/input-property.module';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, OutputPropertyComponent],
  imports: [BrowserModule, NgbModule, InputPropertyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
