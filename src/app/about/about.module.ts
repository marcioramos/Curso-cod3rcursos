import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const rotas: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(rotas)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
