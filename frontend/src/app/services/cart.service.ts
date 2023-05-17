import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  /*CartSubject is an instance of BehaviorSubject 
 that holds the current state of the cart. It is initialized with this.cart, 
  meaning it starts with the initial cart state.*/

  constructor() {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }
  /*The addToCart method takes a Food object as a parameter and 
  adds it to the shopping cart if it's not already present. 
  It checks if an item with the same id exists in the cart.items array 
  using the Array.find method. If an item is found, it means the food is 
  already in the cart, so the method returns early without making any changes. If no item is found, it creates a new CartItem object 
  with the given food and adds it to the cart.items array.*/

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  /*The removeFromCart method removes a cart item from the cart.items array 
  based on the provided foodId. It uses the Array.filter method to create 
  a new array that excludes the item with the matching foodId, and assigns 
  the new array back to this.cart.items.*/

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  // a component could subscribe to this observable and receive updates
  // whenever a new item is added to the cart or the cart is modified in any way. It can then update its view based on the new cart state

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const CartJson = localStorage.getItem('Cart');
    return CartJson ? JSON.parse(CartJson) : new Cart();
  }
}
