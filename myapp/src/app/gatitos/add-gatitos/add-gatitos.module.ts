import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGatitosPageRoutingModule } from './add-gatitos-routing.module';

import { AddGatitosPage } from './add-gatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGatitosPageRoutingModule
  ],
  declarations: [AddGatitosPage]
})
export class AddGatitosPageModule {}
