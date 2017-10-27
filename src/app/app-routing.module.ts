import { DashboardComponent } from './dashboard/dashboard.component';
import { StockDetailComponent } from './stock/stock-detail/stock-detail.component';
import { Code404Component } from './common/components/code404/code404.component';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'stock',
        redirectTo: '/stock/list',
        pathMatch: 'full'
    },
    {
        path: 'stock',
        component : null,
        children: [
            {
                path: 'list/:page',
                component: StockListComponent,
            },
            {
                path: 'list',
                component: StockListComponent,
            },
            {
                path: 'detail/:id',
                component: StockDetailComponent,
            },
            {
                path: 'detail',
                component: StockDetailComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
