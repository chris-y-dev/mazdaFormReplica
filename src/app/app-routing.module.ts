import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildCarFormComponent } from './components/build-car-form/build-car-form.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'build/:carModel', component: BuildCarFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
