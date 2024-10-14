import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { BrowseMediaComponent } from "./browse-media/browse-media.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateMediaComponent } from "./update-media/update-media.component";
import { DeleteMediaComponent } from "./delete-media/delete-media.component";
import { CreateMediaComponent } from "./create-media/create-media.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseMediaComponent,
    UpdateMediaComponent,
    DeleteMediaComponent,
    CreateMediaComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
