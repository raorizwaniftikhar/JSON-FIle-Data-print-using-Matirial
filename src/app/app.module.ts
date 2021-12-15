import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Code01patvickyComponent } from './code01patvicky/code01patvicky.component';
import { Code02patvickyComponent } from './code02patvicky/code02patvicky.component';
import { Code03patvickyComponent } from './code03patvicky/code03patvicky.component';
import { Code04patvickyComponent } from './code04patvicky/code04patvicky.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeaderComponent } from './header/header.component';
import { JsonComponent } from './json/json.component';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SetupComponent,
    DirectivesComponent,
    JsonComponent,
    Code01patvickyComponent,
    Code02patvickyComponent,
    Code03patvickyComponent,
    Code04patvickyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
