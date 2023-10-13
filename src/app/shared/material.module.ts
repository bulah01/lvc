import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSelectModule
  ]
})
export class MaterialModule { }
