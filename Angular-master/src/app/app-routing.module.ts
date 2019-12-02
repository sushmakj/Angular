import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DatePickerTestComponent } from './date-picker-test/date-picker-test.component';
import { TimePickerTestComponent } from './time-picker-test/time-picker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {
    path:'greet',
    component:GreetingComponent
  }
  ,
  {
    path:'product',
    component:ProductListComponent
  },
  
  {
    path:'date-picker',
    component:DatePickerTestComponent
  },
  
  {
    path:'time-picker',
    component:TimePickerTestComponent
  },
  
  {
    path:'rating',
    component:RatingTestComponent
  },
  
  {
    path:'switch',
    component:SwitchTestComponent
  },
  
  {
    path:'pipe-test',
    component:PipeTestComponent
  }
,
{
  path:'carousel',
  component:CarouselComponent
}
,
{
  path:'product-form',
  component:ProductFormComponent
},
  {
    path:'',redirectTo:'/greet',pathMatch:'full'
    
  },
  {
    path:'**',redirectTo:'/greet',pathMatch:'full'
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
