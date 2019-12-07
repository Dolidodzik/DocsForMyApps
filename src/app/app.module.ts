import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { TextComponent } from './text/text.component';
import { HomeComponent } from './home/home.component';
import { SubpageComponent } from './subpage/subpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CodeblockComponent,
    TextComponent,
    HomeComponent,
    SubpageComponent,
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
