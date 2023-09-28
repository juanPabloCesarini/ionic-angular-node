import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGatitosPageRoutingModule } from './update-gatitos-routing.module';

import { UpdateGatitosPage } from './update-gatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateGatitosPageRoutingModule
  ],
  declarations: [UpdateGatitosPage]
})
export class UpdateGatitosPageModule {}
