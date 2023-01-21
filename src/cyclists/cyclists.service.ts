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
        const cyclist = this.findCyclist(cyclistId)[0]
        return {...cyclist}
    }

    updateCyclist(cyclistId: string, firstName: string, lastName: string, country : string, team: string, ranking: number){
        const [cyclist, index] = this.findCyclist(cyclistId)
        const updatedCyclist = {...cyclist}
        updatedCyclist.firstName = firstName
        updatedCyclist.lastName = lastName
        updatedCyclist.country = country
        updatedCyclist.team = team
        updatedCyclist.ranking = ranking
        this.cyclists[index] = {...updatedCyclist}

        
        console.log(updatedCyclist);
        
        return cyclistId;
    }

    private findCyclist(cyclistId: string) :[Cyclist, number]{
        const cyclistIndex = this.cyclists.findIndex(cyclist => cyclist.id === cyclistId)
        const cyclist = this.cyclists[cyclistIndex]
        if (!cyclistIndex) {
            throw new NotFoundException(' Cyclist not found')
        }
        return [cyclist, cyclistIndex]

    }
}