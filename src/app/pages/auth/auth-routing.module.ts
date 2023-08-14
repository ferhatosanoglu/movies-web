import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: '',
        data: { title: 'Giriş Yap' },
        component: LoginComponent
    },
    {
        path: 'register',
        data: { title: 'Kayıt Ol' },
        component: RegisterComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }