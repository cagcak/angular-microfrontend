import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DummyComponent } from './components';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AppComponent, DummyComponent],
	imports: [BrowserModule, AppRoutingModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
