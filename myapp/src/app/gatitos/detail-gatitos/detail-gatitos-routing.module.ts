import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailGatitosPage } from './detail-gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailGatitosPageRoutingModule {}
