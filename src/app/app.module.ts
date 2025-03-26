import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './modules/shared/shared.module';
import { MenuComponent } from './pages/menu/menu.component';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { PrivateeventsComponent } from './pages/privateevents/privateevents.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PressComponent } from './pages/press/press.component';
import { ApiserviceService } from './services/apiservice.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CustomInterceptor } from './services/custom.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IvyCarouselModule } from "angular-responsive-carousel";

import { CustomLoader } from './customertranslate';

/* export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} */
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ReservationComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    OurstoryComponent,
    PrivateeventsComponent,
    CalendarComponent,
    PressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //IvyCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ApiserviceService,AuthGuardService,
    {provide: HTTP_INTERCEPTORS,useClass:CustomInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
