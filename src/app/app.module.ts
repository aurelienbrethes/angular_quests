import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BobComponent } from "./bob/bob.component";
import { MenuComponent } from "./menu/menu.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, BobComponent, MenuComponent, SignUpComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
