import { Detail } from "./Detail";
import { DiscountDto } from "./DiscountDto";

export class Order {
    id: number = 0;
    fecha: string = '';
    idCliente: number = 0;
    detalles: Detail[] = [];
    subtotal:number = 0;
    total:number = 0;
    descuentos?:DiscountDto[];
}
