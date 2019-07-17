import { Component } from '@angular/core';
import { IProduct } from 'src/app/table/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'testapp';

  counter = 0;

  sampleData : Array<IProduct> = [
    {ProductId : 4 , ProductName : "ABC", ProductPrice : 10 },
    {ProductId : 2 , ProductName : "DEF", ProductPrice : 20 },
    {ProductId : 3 , ProductName : "GHI", ProductPrice : 30 }
  ]

  ngOnInit() {

  }

}
