import { NgModule } from '@angular/core';
import { NaboardDashboardViewModule } from './views/module';
import { DASHBOARD_ROUTING } from './dashboard.routes';

@NgModule({
    imports: [NaboardDashboardViewModule, DASHBOARD_ROUTING],
})
export class NaboardDashboardModule {}
