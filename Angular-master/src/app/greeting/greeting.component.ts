import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
message: string = "Welcome to greeting component";
textColor="text-color";
background="text-bkcolor";
Red="color";
Blue="color1";
iscolorChanged=false;
greetingStyle=[this.textColor,this.background];
  constructor() { }

  ngOnInit() {
  }
  sayGreet(event){
    console.log(event);
    this.message="Good Morning"+ event.type+" "+event.target.value;
  }
  toggelColor(){
    this.iscolorChanged = !this.iscolorChanged

   }
  getFgColor(){
    if(this.iscolorChanged){
      return 'red'
    }
    else{
      return 'blue'
    }
  }
  getBkColor(){
    if(this.iscolorChanged){
      return 'blue'
    }
    else{
      return 'red'
    }
  }
  
}
