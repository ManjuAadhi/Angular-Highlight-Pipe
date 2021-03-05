import { Component, VERSION } from "@angular/core";
import { Emp } from "./emp";

@Component({
  selector: "manju",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  test: string = "PMS";

  display(): void {
    console.log(this.test);
  }
  display1(val: any): void {
    this.test = val.target.value;
    console.log(this.test);
  }
  check: boolean = true;

  numArray: number[] = [3, 4, 5];
}
