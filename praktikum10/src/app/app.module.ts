import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormMemberComponent } from './form-member/form-member.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FormMemberComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'form',component:FormMemberComponent},
      {path:'post',component:PostsComponent},
      {path:'**',component:NotFoundComponent},
      {path:'profile/:id',component:ProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
