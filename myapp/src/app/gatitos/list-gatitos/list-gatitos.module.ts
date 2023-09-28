import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGatitosPageRoutingModule } from './list-gatitos-routing.module';

import { ListGatitosPage } from './list-gatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGatitosPageRoutingModule
  ],
  declarations: [ListGatitosPage]
})
export class ListGatitosPageModule {}
