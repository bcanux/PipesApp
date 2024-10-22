import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper:boolean = false): string {
    console.log({value});
    return (toUpper)?
    value.toUpperCase():
    value.toLowerCase();
  }
}
