import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardPage } from './views/pages/dashboard.page';
import { SectorPage } from './views/pages/sector/sector.page';
import { JobPage } from './views/pages/job/job.page';
import { TrainingPage } from './views/pages/training/training.page';
import { EmployeePage } from './views/pages/employee/employee.page';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'jobs',
            },
            {
                path: 'jobs',
                component: JobPage,
            },
            {
                path: 'sectors',
                component: SectorPage,
            },
            {
                path: 'trainings',
                component: TrainingPage,
            },
            {
                path: 'employees',
                component: EmployeePage,
            },
        ],
    },
];
export const DASHBOARD_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
