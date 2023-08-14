import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout/layout.component";

import { AuthGuard } from "./utils/guard/auth.guard";


const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/movies/movies.module").then((m) => m.MoviesModule),
      },
    ]
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }