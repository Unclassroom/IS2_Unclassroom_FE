import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';

//Services
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AuthenticationService, UserService } from './_services/index';
import { Angular2TokenService } from 'angular2-token';

//Redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
//import { AppState, rootReducer, INITIAL_STATE } from './redux/store';
import { ProfileComponent } from './profile/profile.component';

// Social authenticate
import { SocialLoginModule, AuthServiceConfig } from "angular5-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from "angular5-social-login";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("794647363495-bt195vh2d1nk46qg9l84tbbkihfto84d.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: 
  [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgReduxModule,
    ReactiveFormsModule
  ],
  providers: 
  [
    Angular2TokenService,
    HttpClientModule,
    AuthGuard,
    AuthenticationService,
    UserService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      },
      {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {//ngRedux: NgRedux<AppState> en el constructor
    //ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
