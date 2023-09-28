import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailGatitosPageRoutingModule } from './detail-gatitos-routing.module';

import { DetailGatitosPage } from './detail-gatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailGatitosPageRoutingModule
  ],
  declarations: [DetailGatitosPage]
})
export class DetailGatitosPageModule {}
