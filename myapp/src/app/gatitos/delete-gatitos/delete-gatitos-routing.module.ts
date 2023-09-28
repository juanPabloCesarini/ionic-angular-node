import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteGatitosPage } from './delete-gatitos.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteGatitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteGatitosPageRoutingModule {}
