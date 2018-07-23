import { NgModule } from '@angular/core';
import { DashboardPage } from './pages/dashboard.page';
import { ChartModule, ChartsModule } from '@progress/kendo-angular-charts';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SectorPage } from './pages/sector/sector.page';
import { JobPage } from './pages/job/job.page';
import { TrainingPage } from './pages/training/training.page';
import { EmployeePage } from './pages/employee/employee.page';

const PAGES = [DashboardPage, SectorPage, JobPage, TrainingPage, EmployeePage];
const KENDO_MODULES = [ChartModule, ButtonModule, ChartsModule];

@NgModule({
    imports: [RouterModule, CommonModule, ...KENDO_MODULES, FontAwesomeModule],
    declarations: [...PAGES],
    exports: [],
})
export class NaboardDashboardViewModule {}
