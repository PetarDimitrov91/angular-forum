import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {ContentService} from "./content.service";
import {UserModule} from "./user/user.module";
import {ThemeModule} from "./theme/theme.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    ThemeModule,
    SharedModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
