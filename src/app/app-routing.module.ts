import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotel',
    pathMatch: 'full',
  },
  {
    path: 'hotel',
    loadChildren: () => import("../app/pages/hotel/hotel.module").then((m) => m.HotelModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
