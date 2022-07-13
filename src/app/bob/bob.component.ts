import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bob",
  templateUrl: "./bob.component.html",
  styleUrls: ["./bob.component.scss"],
})
export class BobComponent implements OnInit {
  User = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg",
  };

  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ageVisibility() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
