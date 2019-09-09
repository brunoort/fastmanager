import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'blank-page', pathMatch: 'prefix' },
            { path: 'blank-page', loadChildren: () => import('../others/blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'dashboard', loadChildren: () => import('../others/dashboard/dashboard.module').then(m => m.DashboardModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
