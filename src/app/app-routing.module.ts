import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeContentComponent } from './components/poke-content/poke-content.component';

const routes: Routes = [
  {path: 'home', component: PokeContentComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
