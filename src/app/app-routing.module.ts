import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'active-details', pathMatch: 'full' },
  { path: 'active-details', loadChildren: () => import('./active-details/active-details.module').then(m => m.ActiveDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
