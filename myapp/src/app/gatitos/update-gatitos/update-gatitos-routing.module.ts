import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateGatitosPage } from './update-gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateGatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateGatitosPageRoutingModule {}
