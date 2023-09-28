import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-gatitos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-gatitos',
    loadChildren: () => import('./gatitos/list-gatitos/list-gatitos.module').then( m => m.ListGatitosPageModule)
  },
  {
    path: 'add-gatitos',
    loadChildren: () => import('./gatitos/add-gatitos/add-gatitos.module').then( m => m.AddGatitosPageModule)
  },
  {
    path: 'update-gatitos',
    loadChildren: () => import('./gatitos/update-gatitos/update-gatitos.module').then( m => m.UpdateGatitosPageModule)
  },
  {
    path: 'detail-gatitos',
    loadChildren: () => import('./gatitos/detail-gatitos/detail-gatitos.module').then( m => m.DetailGatitosPageModule)
  },
  {
    path: 'delete-gatitos',
    loadChildren: () => import('./gatitos/delete-gatitos/delete-gatitos.module').then( m => m.DeleteGatitosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
