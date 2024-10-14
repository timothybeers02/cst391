import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Christian Library";
  version = "1.0";

  constructor(private router: Router) {}

  public displayVersion() {
    alert(this.title + " Version: " + this.version);
  }
}
