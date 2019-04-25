import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { FormsModule } from '@angular/forms';
import { LStorageService } from './services/lstorage.service';

import { ListState } from './store/states/list.state';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EachListComponent } from './components/each-list/each-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    NavComponent,
    NotFoundComponent,
    EachListComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ListState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
    
  ],
  providers: [LStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
