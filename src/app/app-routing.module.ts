import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/core/tabs/tabs.module#TabsPageModule' },
  { path: '**', loadChildren: './pages/core/troubleshooting/troubleshooting.module#TroubleshootingPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
