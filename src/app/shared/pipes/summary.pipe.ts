import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})

export class SummaryPipe implements PipeTransform{
    transform(value: string,limit:number) {
        console.log(value)
      //  return "Hello"
      return value.slice(0,limit)
    }

}