import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentMethodService } from '../../services/payment-method.service';
import { paymentMethodDTO } from '../../models/paymentMethodDTO';
import { payDetailDTO } from '../../models/payDetailDTO';

@Component({
  selector: 'fn-form-pago',
  templateUrl: './form-pago.component.html',
  styleUrls: ['./form-pago.component.css']
})
export class FormPagoComponent {


  //listado de las formas de pago 
  listTypePayment: paymentMethodDTO[] = [];

  listPaids: payDetailDTO[] = [];
  //un solo pago realizado que se adiciona a la lista
  pay: payDetailDTO = new payDetailDTO();


  resto: number = 0;
  @Input() total: number = 0;
  @Output() restoEmit = new EventEmitter<number>();

  constructor(private formasPagoService: PaymentMethodService, private paidservice: PaymentMethodService) {
    formasPagoService.obtenerFormasPago().subscribe((response: paymentMethodDTO[]) => {
      this.listTypePayment = response;
    },
      (error: any) => {
        console.error(error);
      }
    );
  }

  // agrega pagos a la lista de pagos

  addPay() {
  const newPay = new payDetailDTO();
 
  newPay.amount  = this.pay.amount; 
  newPay.paymentMethod = this.pay.paymentMethod; 
  newPay.observations = this.pay.observations

  this.listPaids.push(newPay);
  this.paidservice.setListPaids(this.listPaids);
  console.log(this.paidservice.getListPaids());
  this.pay = new payDetailDTO(); 
  this.resto = this.resto - newPay.amount!;
 
  }

 






  ngOnInit() {
 
    this.resto = this.total;
  }











}