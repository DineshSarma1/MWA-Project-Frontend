import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponentComponent } from './sample-component/sample-component.component';

const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponentComponent
  },
  {  
    path: 'admin',  
    loadChildren: () => import('../admin-module/admin-module.module')  
    .then(m => m.AdminModuleModule)  
  }, 
  {  
    path: 'client',  
    loadChildren: () => import('../client-module/client-module.module')  
    .then(m => m.ClientModuleModule)  
  }, 
  {  
    path: 'common',  
    loadChildren: () => import('../common-module/common-module.module')  
    .then(m => m.CommonModuleModule)  
  }, 
  {  
    path: 'auth',  
    loadChildren: () => import('../auth/auth.module')  
    .then(m => m.AuthModule)  
 }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
