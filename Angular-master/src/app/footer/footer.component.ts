import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<h5>&copy;Zensar Online Shopee</h5>
  <h6>All Rights Reserved</h6>`,
  styles: ['h5 { font-weight: bold;}','h6 {color: blue;}'] 
 
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
