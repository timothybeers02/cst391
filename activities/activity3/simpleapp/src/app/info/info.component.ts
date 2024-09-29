import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  @Input() name: string = "";
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() {}

  ngOnInit() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo() {
    this.quantity = 0;
    this.products = [
      'Star Wars',
      'The Empire Strikes Back',
      'Return of the Jedi',
    ];
    this.selectedProduct = 'Star Wars';
    console.log("Resetting info in newInfo()");
  }

  onSubmit() {
    console.log("In onSubmit() with quantity of " + this.quantity + " and Movie selected is " + this.selectedProduct);
  }
}
