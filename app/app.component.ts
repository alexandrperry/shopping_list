import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items :Item[] = [
        { name: "Хлеб", done: false, price: 5 },
        { name: "Яблоки", done: false, price: 10 },
        { name: "Макароны", done: true, price: 25 },
        
  ];

  addItem(name: string, price: number): void {
         
        if(name==null || name==undefined || name.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
      
        this.items.push(new Item(name, price));
    }
}
export class Item{
  name :string;
  price :number;
  done :boolean;

  constructor( name :string ,price :number){
    this.name = name;
    this.price = price;
    this.done = false;
  }

}


