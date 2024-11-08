import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeachBarComponent } from './UI/seach-bar/seach-bar.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { SideFilterPanelComponent } from './components/side-filter-panel/side-filter-panel.component';

import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { ProductCardCatalogComponent } from './components/product-card-catalog/product-card-catalog.component';
import { ListProductCardCatalogComponent } from './components/list-product-card-catalog/list-product-card-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeachBarComponent,
    ProductPageComponent,
    FilterPanelComponent,
    SideFilterPanelComponent,
    FilterItemComponent,
    ProductCardCatalogComponent,
    ListProductCardCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
