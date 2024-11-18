import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeachBarComponent } from './UI/seach-bar/seach-bar.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { SideFilterPanelComponent } from './components/side-filter-panel/side-filter-panel.component';
import { ListProductCardCatalogComponent } from './components/list-product-card-catalog/list-product-card-catalog.component';
import { ProductCardCatalogComponent } from './components/product-card-catalog/product-card-catalog.component';
import { FilterAsidePanelComponent } from './components/filter-aside-panel/filter-aside-panel.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ModuleWindowCardComponent } from './components/module-window-card/module-window-card.component';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { ModalWindowSignInComponent } from './components/modal-window-sign-in/modal-window-sign-in.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalWindowSignUpComponent } from './components/modal-window-sign-up/modal-window-sign-up.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SysInfoPageComponent } from './pages/sys-info-page/sys-info-page.component';
import { DevsInfoPageComponent } from './pages/devs-info-page/devs-info-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeachBarComponent,
    ProductPageComponent,
    FilterPanelComponent,
    FilterItemComponent,
    SideFilterPanelComponent,
    ListProductCardCatalogComponent,
    ProductCardCatalogComponent,
    FilterAsidePanelComponent,
    FilterPipePipe,
    ModuleWindowCardComponent,
    SortPanelComponent,
    ModalWindowSignInComponent,
    ModalWindowSignUpComponent,
    CartPageComponent,
    SysInfoPageComponent,
    DevsInfoPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    CartProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
