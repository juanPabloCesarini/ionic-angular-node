import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGatitosPage } from './add-gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: AddGatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGatitosPageRoutingModule {}
