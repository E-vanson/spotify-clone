import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    readonly title: string;
    
    @IsString()
    @IsNotEmpty()
    readonly description: string;


    @IsDateString()
    @IsNotEmpty()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;

    @IsArray()
    @IsString({each:true})
    @IsNotEmpty()
    readonly artists: string[];
}