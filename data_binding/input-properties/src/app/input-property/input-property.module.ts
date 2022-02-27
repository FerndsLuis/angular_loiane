import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property.component';

@NgModule({
  declarations: [InputPropertyComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputPropertyComponent],
})
export class InputPropertyModule {}
