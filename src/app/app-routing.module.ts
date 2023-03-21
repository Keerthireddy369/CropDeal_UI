import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/gaurd/auth-guard.service';
import { AddcropComponent } from './Components/AdminSection/addcrop/addcrop.component';
import { AdminPageComponent } from './Components/AdminSection/admin-page/admin-page.component';
import { SigninComponent } from './Components/AdminSection/signin/signin.component';
import { UserstatusComponent } from './Components/AdminSection/userstatus/userstatus.component';
import { CartComponent } from './Components/DealerSection/cart/cart.component';
import { DealerpageComponent } from './Components/DealerSection/dealerpage/dealerpage.component';
import { DealerviewComponent } from './Components/DealerSection/dealerview/dealerview.component';
import { PaymentComponent } from './Components/DealerSection/payment/payment.component';
import { UpdateDealerComponent } from './Components/DealerSection/update-dealer/update-dealer.component';

import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { AddCroponsaleComponent } from './Components/UserSection/add-croponsale/add-croponsale.component';
import { CropComponent } from './Components/UserSection/crop/crop.component';
import { CroponsaleComponent } from './Components/UserSection/croponsale/croponsale.component';
import { FarmerpageComponent } from './Components/UserSection/farmerpage/farmerpage.component';
import { HomepageComponent } from './Components/UserSection/homepage/homepage.component';
import { LoginComponent } from './Components/UserSection/login/login.component';
import { OrdersComponent } from './Components/UserSection/orders/orders.component';
import { RegistrationComponent } from './Components/UserSection/registration/registration.component';
import { SalesComponent } from './Components/UserSection/sales/sales.component';
import { UpdateuserComponent } from './Components/UserSection/updateuser/updateuser.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuardService] },
  { path: 'dealer-page', component: DealerpageComponent, canActivate: [AuthGuardService] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuardService] },
  { path: 'farmer-page', component: FarmerpageComponent, canActivate: [AuthGuardService] },
  { path: 'update-user', component: UpdateuserComponent, canActivate: [AuthGuardService] },
  { path: 'update-dealer', component: UpdateDealerComponent, canActivate: [AuthGuardService] },
  { path: 'crop', component: CropComponent, canActivate: [AuthGuardService] },
  { path: 'create', component: AddcropComponent, canActivate: [AuthGuardService] },
  { path: 'status', component: UserstatusComponent },
  { path:'cart', component:CartComponent},
  { path :'orders',component:OrdersComponent},
  { path:'sales',component:SalesComponent},
  { path: 'this', component: SigninComponent },
  { path: 'onSale', component: CroponsaleComponent, canActivate: [AuthGuardService] },
  { path: 'addonsale', component: AddCroponsaleComponent, canActivate: [AuthGuardService] },
  { path: 'viewcrops', component: DealerviewComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PagenotfoundComponent },
  { path :'signin',component:SigninComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
