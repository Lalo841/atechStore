import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
  },
  {
    path: 'sys-info',
    component: ProductPageComponent,
  },
  {
    path: 'devs-info',
    component: ProductPageComponent,
  },
  {
    path: '**',
    component: ProductPageComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
