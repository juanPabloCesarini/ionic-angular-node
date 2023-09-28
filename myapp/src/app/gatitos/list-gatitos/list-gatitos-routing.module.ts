import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGatitosPage } from './list-gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: ListGatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGatitosPageRoutingModule {}
