import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core-components/shared-components/navbar/navbar.component';
import { SidebarComponent } from './core-components/shared-components/sidebar/sidebar.component';
import { FooterComponent } from './core-components/shared-components/footer/footer.component';
import { MainContainerComponent } from './core-components/shared-components/main-container/main-container.component';
import { LoginComponent } from './core-components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageErrorComponent } from './core-components/page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainContainerComponent,
    LoginComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
