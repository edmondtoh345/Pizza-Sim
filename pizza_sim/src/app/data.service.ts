import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (private http: HttpClient) { }
    
  getItemsfromProducts(){
    return this.http.get(environment.jsonUrl_prod);
  }

  getItemsfromCarts(){
    return this.http.get(environment.jsonUrl_cart);
  }

  AddItemstoCart(data: any){
    return this.http.post(environment.jsonUrl_cart, data);
  }

  UpdatedItemsinCart(updateItem:any, id:any){
    return this.http.put(`environment.jsonUrl_cart/${id}`, updateItem);
  }

  DeleteItemsfromCart(id:any){
    return this.http.delete(`environment.jsonUrl_cart/${id}`);
  }

  register(user: any) {
    return this.http.post(`${environment.authUrl}/register`, user);
  }

  login(cred: any) {
    return this.http.post(`${environment.authUrl}/login`, cred);
  }

  isAuthenticated() {
    return this.http.post(`${environment.authUrl}/isAuthenticated`, null, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}


