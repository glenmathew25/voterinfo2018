import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopbarComponent } from "./topbar/topbar/topbar.component";
import { MenuComponent } from "./topbar/menu/menu.component";
import { StatusComponent } from "./topbar/status/status.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, TopbarComponent, MenuComponent, StatusComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
