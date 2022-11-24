import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MfScopeHeaderModule } from './mf-scope-header/mf-scope-header.module';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MfScopeHeaderModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
