import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {HomeComponent} from "./Components/home/home.component";
import {HeaderComponent} from "./Components/home/header/header.component";
import {FooterComponent} from "./Components/home/footer/footer.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MainPageComponent } from './Components/home/main-page/main-page.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ImageSliderComponent } from './Components/home/main-page/image-slider/image-slider.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AllProductsComponent } from './Components/home/main-page/all-products/all-products.component';
import { SomeProductsComponent } from './Components/home/main-page/some-products/some-products.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductDetailComponent } from './Components/Products/product-detail/product-detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { CategoryProductsComponent } from './Components/category-products/category-products.component';
import { LoadingComponent } from './loading/loading.component';
import { OrderComponent } from './Components/order/order.component';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxImageZoomModule } from 'ngx-image-zoom';

// -> imported filter pipe
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ImageSliderComponent,
    AllProductsComponent,
    SomeProductsComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    ProductDetailComponent,
    AdminComponent,
    CategoryProductsComponent,
    LoadingComponent,
    OrderComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    IvyCarouselModule,
    FormsModule,
    NgbModule,
    DragScrollModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatBadgeModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxImageZoomModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
