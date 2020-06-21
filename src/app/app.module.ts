import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { environment } from 'src/environments/environment';
import { PersonState, BookState } from './pesron.states';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line: max-line-length
    NgxsModule.forRoot([PersonState, BookState], { developmentMode: !environment.production, executionStrategy: NoopNgxsExecutionStrategy, selectorOptions: { injectContainerState: false, suppressErrors: false} }),
    NgxsDataPluginModule.forRoot([]),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
