import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'naboard-dashboard-page',
    templateUrl: './dashboard.page.html',
})
export class DashboardPage {
    public constructor(private router: Router) {}

    public goToPage(page: string): void {
        this.router.navigate([page]);
    }
}
