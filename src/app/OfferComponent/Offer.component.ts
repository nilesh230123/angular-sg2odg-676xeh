import { Component } from '@angular/core';
import { products} from '../products';
import { customers } from '../customersData';

@Component({
  selector: 'app-root',
  templateUrl: './Offer.component.html',
  styleUrls: ['./Offer.component.css']
})
export class AppComponent {
products=products;
customers=customers;
}


