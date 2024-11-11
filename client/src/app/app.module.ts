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
import { ModalWindowSignInComponent } from './components/modal-window-sign-in/modal-window-sign-in.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    ModalWindowSignInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
