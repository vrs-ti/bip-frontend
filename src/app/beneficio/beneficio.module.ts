import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficioComponent } from './beneficio.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { CurrencyMaskModule } from "ng2-currency-mask";



@NgModule({
  declarations: [
    BeneficioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    CurrencyMaskModule
],
  exports:[
    BeneficioComponent
  ]
})
export class BeneficioModule { }
