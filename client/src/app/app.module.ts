import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeachBarComponent } from './UI/seach-bar/seach-bar.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { SideFilterPanelComponent } from './components/side-filter-panel/side-filter-panel.component';
import { PruductListComponent } from './components/pruduct-list/pruduct-list.component';
import { ProductComponent } from './components/product/product.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeachBarComponent,
    ProductPageComponent,
    FilterPanelComponent,
    SideFilterPanelComponent,
    PruductListComponent,
    ProductComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
