import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ], 
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule { }
