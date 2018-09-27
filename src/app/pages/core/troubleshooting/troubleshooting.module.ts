import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TroubleshootingPage } from './troubleshooting.page';

const routes: Routes = [
  {
    path: '',
    component: TroubleshootingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TroubleshootingPage]
})
export class TroubleshootingPageModule {}
