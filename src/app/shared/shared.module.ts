import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';

import { DatafilterPipe } from './datafilter.pipe';

@NgModule({
  declarations: [CartWidgetComponent, DatafilterPipe],
  imports: [
    CommonModule
  ],
  exports:[CartWidgetComponent, DatafilterPipe]

})
export class SharedModule { }
