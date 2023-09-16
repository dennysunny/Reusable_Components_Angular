import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accordion',
    loadChildren: () =>
      import('./accordion/accordion.module').then((a) => a.AccordionModule),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./modal/modal.module').then((a) => a.ModalModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then((a) => a.TableModule),
  },
  {
    path: 'input',
    loadChildren: () => 
      import('./input/input.module').then((a) => a.InputModule)
  },
  {
    path: 'placeholder',
    loadChildren: () =>
      import('./placeholder/placeholder.module').then(
        (a) => a.PlaceholderModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs-example/tabs-example-module.module').then((a) => a.TabsExampleModuleModule),
  },
  {
    path: 'items-list',
    loadChildren: () =>
      import('./items-list/items-list.module').then((a) => a.ItemsListModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then((a) => a.StatisticsModule),
  },
  {
    path: 'uploads',
    loadChildren: () =>
      import('./uploads/uploads.module').then((a) => a.UploadsModule),
  },

  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
