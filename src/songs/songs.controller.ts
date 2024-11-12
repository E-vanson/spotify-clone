import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, OnModuleInit, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDTO } from "./dto/create-songs.dto";
import { Connection } from "src/common/constants/connection";

@Controller('songs')
export class SongsController implements OnModuleInit{
    constructor(
        private songsService: SongsService,
        @Inject("CONNECTION")
        private connection: Connection
    ) {
        console.log('Injected Service:', songsService);
        console.log("The connection string ", this.connection.CONNECTION_STRING)
    }

    onModuleInit() {
    console.log('SongsController initialized');
    console.log('SongsService:', this.songsService);
    console.log('Connection:', this.connection);
  }
    
    @Get()
    findAll() {
        
        try {
           return this.songsService.getSongs() 
        } catch (error) {
            throw new HttpException("Server error", HttpStatus.INTERNAL_SERVER_ERROR, {cause: error})
        }
        
    }

    @Get(':id') //id is the dynamic parameter
    findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id:number) {
        return `Find song based on id of ${typeof id} endpoint`
    }
    
    @Delete(':id')
    deleteOne() {
        return "Delete song endpint"
    }
    
    @Put(':id')
    updateOne() {
        return "Update song endpoint"
        }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songsService.createSong(createSongDTO)
    }


}