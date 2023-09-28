import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteGatitosPageRoutingModule } from './delete-gatitos-routing.module';

import { DeleteGatitosPage } from './delete-gatitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteGatitosPageRoutingModule
  ],
  declarations: [DeleteGatitosPage]
})
export class DeleteGatitosPageModule {}
