import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact/contact.component'
import { ContactRoutingModule } from './contact-routing.module';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
