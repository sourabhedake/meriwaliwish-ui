import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiFeaturesComponent } from './ui-features/ui-features.component';
import { ComponentsComponent } from './components/components.component';
import { MapsComponent } from './maps/maps.component';
import { NgxChartsComponent } from './charts/charts.component';
import { NgxEditorsComponent } from './editors/editors.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ui-features', component: UiFeaturesComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'charts', component: NgxChartsComponent },
      { path: 'editors', loadChildren: './editors/editors.module#NgxEditorsModule' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
