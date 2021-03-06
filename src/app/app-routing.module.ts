import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { AboutsComponent } from './components/pages/abouts/abouts.component';

const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'about', component: AboutsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
