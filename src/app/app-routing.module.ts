import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpdateComponent } from './operations/update/update.component';
import { CreateComponent } from './operations/create/create.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  
{
 path:'home', component:HomeComponent, title:'Home page'
},
{
  path:'create', component:CreateComponent, title:'Create Form'
 },
{
  path:'update/:id', component:UpdateComponent, title:'Update Form'
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
