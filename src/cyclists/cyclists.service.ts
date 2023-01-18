import { Injectable, NotFoundException } from "@nestjs/common";
import { Cyclist } from './cyclists.model'

@Injectable()
export class CyclistsService {
    private cyclists: Cyclist[] = []

    insertCyclist(firstName: string, lastName: string, country : string, team: string, ranking: number){
        const cyclistId = firstName + country;
        const newCyclist = new Cyclist(cyclistId , firstName, lastName, country, team, ranking);
        console.log(newCyclist);
        this.cyclists.push(newCyclist);
        return cyclistId;
    }

    getCyclists(){
        return [...this.cyclists]
    }

    getSingleCyclist(cyclistId: string){
        const cyclist = this.findCyclist(cyclistId)
        return {...cyclist}
    }

    updateCyclist(cyclistId: string, firstName: string, lastName: string, country : string, team: string, ranking: number){

    }

    private findCyclist(cyclistId: string){
        const cyclist = this.cyclists.find(cyclist => cyclist.id == cyclistId)
        if (!cyclist) {
            throw new NotFoundException(' Cyclist not found')
        }
        return cyclist

    }
}