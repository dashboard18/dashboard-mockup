import { NgModule } from '@angular/core';
import { NaboardDashboardViewModule } from './views/module';
import { DASHBOARD_ROUTING } from './dashboard.routes';
import { NaboardDomainModule } from './domains/module';

@NgModule({
    imports: [NaboardDashboardViewModule, DASHBOARD_ROUTING, NaboardDomainModule],
})
export class NaboardDashboardModule {}
