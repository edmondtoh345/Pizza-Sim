import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service: DataService) { }
  public productArray: Array<any> = [];

  public cartArray: Array<any> = [];

  public totalAmount = 0;

  public totalItems = 0;
  //
  public gst: number = 8;

  public totalgst: number = 0;

  public finalamountwithGST: number = 0;

  public addedItem: any = {};


  ngOnInit() {
    this.service.getItemsfromProducts().subscribe((data: any) => {
      this.productArray = data
    })
  }

  PutProductintoCart(data:any){
  this.addedItem = {
    id: data.id,
    image: data.image,
    name: data.name,
    description: data.description,
    price: data.price,
    qty: 1
  }
  }

  getItemsfromCarts(){
    this.service.getItemsfromCarts().subscribe((data:any)=>
    this.cartArray = data);
  }

  AddItemstoCart(data:any) {
  this.service.AddItemstoCart(data).subscribe((data: any)=>{ 
    })
  }

  DeleteItemsfromCart(id: any) {
    this.service.DeleteItemsfromCart(id).subscribe(data => {
      this.cartArray = this.cartArray.filter(p => p.id !== id);
      this.finalAmount();
    })
  }

  finalAmount() {
    this.service.getItemsfromCarts().subscribe((data: any) => this.cartArray = data)

    let totalqty = this.cartArray.map(p => p.qty)
    let totalcost = this.cartArray.map(p => p.price)

    let sum: number = 0;
    for (let i: number = 0; i < this.cartArray.length; i++) {
      sum += (parseInt(totalqty[i]) * parseInt(totalcost[i]));
      this.totalAmount = sum
    }

    this.totalgst = Math.round(((this.gst / 100) * this.totalAmount) * 100) / 100;
    this.finalamountwithGST = Math.round((this.totalgst + this.totalAmount) * 100) / 100;

  }

  GetItemsfromCart() {
    this.service.getItemsfromCarts().subscribe((data: any) => this.cartArray = data)
  }

}