import { NgModule } from '@angular/core';

import { MonitorRoutingModule } from './monitor-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';




import { MonitorComponent } from './monitor.component';


@NgModule({
  imports: [MonitorRoutingModule, NzCardModule, NzSwitchModule ],
  declarations: [MonitorComponent],
  exports: [MonitorComponent]
})
export class MonitorModule { }
