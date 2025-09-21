import { Pipe, PipeTransform } from "@angular/core";
import { Iplayers } from "../models/players";


@Pipe({
    name:"filter"
})

export class FilterPipe implements PipeTransform{
    transform(value: Array<Iplayers>,serachVal:string) {
        if(!serachVal){
            return value
        }
        if(!value){
            return []
        }
        let filteredArr=value.filter(p=>p.team.toLowerCase().includes(serachVal.toLowerCase())||p.name.toLowerCase().includes(serachVal.toLowerCase())|| p.age.toString().includes(serachVal.toLowerCase())||p.position.toLowerCase().includes(serachVal.toLowerCase())||p.rating.toString().includes(serachVal.toLowerCase()))
    return filteredArr
    }

}