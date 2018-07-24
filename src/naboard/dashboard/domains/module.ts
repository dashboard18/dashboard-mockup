import { NgModule } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { NaboardApiClient } from './client';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [DashboardService, NaboardApiClient],
})
export class NaboardDomainModule {}
