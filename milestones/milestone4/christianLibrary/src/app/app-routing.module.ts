import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { BrowseMediaComponent } from "./browse-media/browse-media.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateMediaComponent } from "./update-media/update-media.component";
import { DeleteMediaComponent } from "./delete-media/delete-media.component";
import { CreateMediaComponent } from "./create-media/create-media.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "browse-media", component: BrowseMediaComponent },
  { path: "delete-media", component: DeleteMediaComponent },
  { path: "update-media", component: UpdateMediaComponent },
  { path: "create-media", component: CreateMediaComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
