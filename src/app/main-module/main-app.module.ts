import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainAppModule { }
