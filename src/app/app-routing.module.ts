import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BobComponent } from "./bob/bob.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: "bob", component: BobComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "", component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
