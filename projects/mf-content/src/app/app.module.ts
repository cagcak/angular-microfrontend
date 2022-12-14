import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MfScopeContentModule } from './mf-scope-content/mf-scope-content.module';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MfScopeContentModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
