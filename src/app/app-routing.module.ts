import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildCarFormComponent } from './components/build-car-form/build-car-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubmissionResultComponent } from './components/submission-result/submission-result.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'build/:carModel', component: BuildCarFormComponent },
  { path: 'build/submission/:id', component: SubmissionResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
