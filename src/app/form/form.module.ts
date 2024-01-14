import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';









import { FormComponent } from './form.component';


@NgModule({
  imports: [FormRoutingModule, NzCardModule, NzSwitchModule, NzFormModule,NzSelectModule ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule { }
