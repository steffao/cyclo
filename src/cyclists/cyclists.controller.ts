import { Controller, Post, Get, Body, Param, Patch } from "@nestjs/common";
import { CyclistsService } from './cyclists.service'

@Controller('cyclists')
export class CyclistsController{
    constructor(private readonly cyclistsService: CyclistsService){}
    
    @Post()
    addCyclist(
        @Body('firstName') cyclistFirstName: string,
        @Body('lastName') cyclistLastName: string,
        @Body('country') cyclistCountry: string,
        @Body('team') cyclistTeam: string,
        @Body('ranking') cyclistRanking: number,
    ): any {
        
        const generatedId = this.cyclistsService.insertCyclist(
            cyclistFirstName,
            cyclistLastName,
            cyclistCountry,
            cyclistTeam,
            cyclistRanking
        );
        return { id: generatedId };
    }
    @Get()
    getAllCyclists(){
        return this.cyclistsService.getCyclists()
    }

    @Get(':id')
    getSingleCyclist(@Param('id') cyclistId : string){
        return this.cyclistsService.getSingleCyclist(cyclistId)
    }

    @Patch(':id')
    updateCyclist(
        @Param('id') cyclistId : string,
        @Body('firstName') cyclistFirstName: string,
        @Body('lastName') cyclistLastName: string,
        @Body('country') cyclistCountry: string,
        @Body('team') cyclistTeam: string,
        @Body('ranking') cyclistRanking: number,
    ){

    }
}