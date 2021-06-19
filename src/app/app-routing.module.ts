import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersListComponent } from './components/charactersList/characters-list.component';

const routes: Routes = [
  {path: 'characters-list', component: CharactersListComponent},
  {path:'character/:id', component:CharacterComponent},
  {path: '**',  redirectTo: '/characters-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
