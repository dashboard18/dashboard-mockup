import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UbudTemplateModule } from '@ubud/template';
import { UbudSidebarMenuModule } from '@ubud/menus';
import { UbudTooltipModule } from '@ubud/tooltip';
import { UbudDropdownModule } from '@ubud/dropdown';
import { UbudUserControlModule } from '@ubud/user-control';
import { routing } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument(<any>{
            maxAgent: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule,
        routing,
        UbudTemplateModule,
        UbudSidebarMenuModule,
        UbudTooltipModule,
        UbudDropdownModule,
        UbudUserControlModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
