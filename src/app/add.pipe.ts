import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "add"
})
export class AddPipe implements PipeTransform {
  // export class AddPipe implements PipeTransform {

  transform(value: any[]): any {
    //return null;
    var results = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] % 2 == 1) results.push(value[i]);
    }
    return results;
  }
}
