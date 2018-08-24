import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module'
import { TestModule } from './test/test.module'
import { WorkingModule } from './working/working.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UiModule } from './ui/ui.module';

const routes: Routes = [
{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule'
  },  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'working',
    loadChildren: './working/working.module#WorkingModule'
  },  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    TestModule,
    WorkingModule,
    RouterModule.forRoot(routes),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
