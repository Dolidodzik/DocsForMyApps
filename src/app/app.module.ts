import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { TextComponent } from './text/text.component';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';

import { HighlightJsModule } from 'ngx-highlight-js';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CodeblockComponent,
    TextComponent,
    OverviewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
