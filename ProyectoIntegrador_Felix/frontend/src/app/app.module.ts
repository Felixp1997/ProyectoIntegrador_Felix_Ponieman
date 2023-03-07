import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoAPComponent } from './Components/logo-ap/logo-ap.component';
import { SocialComponent } from './Components/social/social.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { HardComponent } from './Components/hard/hard.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    ProyectosComponent,
    FooterComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgCircleProgressModule.forRoot({
      // set defaults here
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
