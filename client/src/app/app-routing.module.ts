import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SysInfoPageComponent } from './pages/sys-info-page/sys-info-page.component';
import { DevsInfoPageComponent } from './pages/devs-info-page/devs-info-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'sys-info',
    component: SysInfoPageComponent,
  },
  {
    path: 'devs-info',
    component: DevsInfoPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
