import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/pipes/filterpipe';
import { SummaryPipe } from './shared/pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
