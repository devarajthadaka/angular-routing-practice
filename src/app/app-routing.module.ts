import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { CitiesComponent } from './cities/cities.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent }  from './home/home.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosComponent } from './photos/photos.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { SectionComponent } from './section/section.component';
import { StatesComponent } from './states/states.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'section', component:SectionComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'comments', component:CommentsComponent},
  {path: 'albums', component:AlbumsComponent},
  {path: 'photos', component:PhotosComponent},
  {path: 'todos', component:TodosComponent},
  {path: 'users', component:UsersComponent},
  {path: 'states/:id', component:StatesComponent},
  {path: 'cities', component:CitiesComponent},
  {path: 'countries', component:CountriesComponent},
  {path: 'post-details/:id', component:PostDetailsComponent},
  {path: 'photo-details/:id', component:PhotoDetailsComponent},
  {path: 'albums-details/:id', component:AlbumsDetailsComponent},
  {path: 'comments-details/:name' , component:CommentsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
