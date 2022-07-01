import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetNameModule } from './modules/get-name/get-name.module';
import { InputNameModule } from './modules/input-name/input-name.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, InputNameModule, GetNameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
