import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { MaterialModule } from './../material/material.module';
@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductsModule { }
