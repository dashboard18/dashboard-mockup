/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const routes: Routes = [
    {
        path: '',
        loadChildren: '../../../../src/naboard/dashboard/dashboard.module#NaboardDashboardModule',
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
