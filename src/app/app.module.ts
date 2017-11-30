import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
 
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CronJobsModule } from 'ngx-cron-jobs';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CronJobsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }