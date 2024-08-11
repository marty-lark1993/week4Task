import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(FormsModule, RouterModule.forRoot(routes))]
})
  .catch((err) => console.error(err));
