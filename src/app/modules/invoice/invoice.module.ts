import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';

@NgModule({
  declarations: [HomeComponent, InvoiceDetailComponent],
  providers: [],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class InvoiceModule {}
