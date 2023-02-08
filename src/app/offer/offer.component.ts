import { Component } from '@angular/core';
import { products} from '../products';
import { customers } from '../customersData';

@Component({
  selector: 'app-root',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],

})
//  export class AppComponent {
// products=products;
// customers=customers;
// }
export class OfferComponent {
  products=products;
  customers=customers;
  }

