import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { AddcropComponent } from './Components/AdminSection/addcrop/addcrop.component';
import { AdminPageComponent } from './Components/AdminSection/admin-page/admin-page.component';
import { SigninComponent } from './Components/AdminSection/signin/signin.component';
import { UserstatusComponent } from './Components/AdminSection/userstatus/userstatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptorService } from 'Service/token-interceptor.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DealerpageComponent } from './Components/DealerSection/dealerpage/dealerpage.component';
import { DealerviewComponent } from './Components/DealerSection/dealerview/dealerview.component';
import { PaymentComponent } from './Components/DealerSection/payment/payment.component';
import { UpdateDealerComponent } from './Components/DealerSection/update-dealer/update-dealer.component';
import { AddCroponsaleComponent } from './Components/UserSection/add-croponsale/add-croponsale.component';
import { CropComponent } from './Components/UserSection/crop/crop.component';
import { CroponsaleComponent } from './Components/UserSection/croponsale/croponsale.component';
import { FarmerpageComponent } from './Components/UserSection/farmerpage/farmerpage.component';
import { HomepageComponent } from './Components/UserSection/homepage/homepage.component';
import { LoginComponent } from './Components/UserSection/login/login.component';
import { RegistrationComponent } from './Components/UserSection/registration/registration.component';
import { UpdateuserComponent } from './Components/UserSection/updateuser/updateuser.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './Components/DealerSection/cart/cart.component';
import { NgPipesModule } from 'ngx-pipes';
import { OrdersComponent } from './Components/UserSection/orders/orders.component';
import { SalesComponent } from './Components/UserSection/sales/sales.component';



export function tokengetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    AddcropComponent,
    AdminPageComponent,
    SigninComponent,
    UserstatusComponent,
    DealerpageComponent,
    DealerviewComponent,
    PaymentComponent,
    UpdateDealerComponent,
    AddCroponsaleComponent,
    CropComponent,
    CroponsaleComponent,
    FarmerpageComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    UpdateuserComponent,
    CartComponent,
    OrdersComponent,
    SalesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,
    //Ng2SearchPipeModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    // MatIconModule,
    // MatButtonModule,
    NgxPaginationModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    NgPipesModule,
   
    JwtModule.forRoot({
      config: {
        tokenGetter: tokengetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
