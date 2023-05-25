import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
    <h3>counter: {{counter}}</h3>
    <button (click)="increment(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement()">-1</button>
  `
})
export class counterComponent {
  public title:string = 'Mi primera app de Angular';
  public counter:number=10;

  increment(value:number):void{
    this.counter+=value;
  }
  decrement():void{
    this.counter-=1;
  }
  reset(){

    this.counter=10;
  }
}
