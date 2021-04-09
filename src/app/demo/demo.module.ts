import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DemoModule { }
