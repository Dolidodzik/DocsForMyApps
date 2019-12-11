import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';
import { PrismModule } from '@ngx-prism/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { TextComponent } from './text/text.component';
import { HomeComponent } from './home/home.component';
import { SubpageComponent } from './subpage/subpage.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CodeblockComponent,
    TextComponent,
    HomeComponent,
    SubpageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightJsModule,
    PrismModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
