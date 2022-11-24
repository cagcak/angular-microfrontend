import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MfScopeFooterModule } from './mf-scope-footer/mf-scope-footer.module';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MfScopeFooterModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
