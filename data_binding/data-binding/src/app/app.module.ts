import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [AppComponent, DataBindingComponent],
  imports: [BrowserModule, MeuFormModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
