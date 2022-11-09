import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { navService } from './nav/nav.service';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './nav/counter.reducer';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomepageComponent, ProjectsComponent, SkillsComponent, ContactComponent, FooterComponent, ServicesComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer }),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [navService],
  bootstrap: [AppComponent],
})
export class AppModule {}
