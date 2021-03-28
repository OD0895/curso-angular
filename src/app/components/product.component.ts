import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges 
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges')
    console.log(changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit')
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  addToCart() {
    console.log('add to cart')
    this.productClick.emit(this.product.id);
  }
}