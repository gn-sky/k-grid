import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [ ProductsListComponent ]
})
export class ProductModule { }
