import { ActorDto } from "./actorDto";

export class FilmDto {
    public filmId?: number;
    public title? : string;
    public description?: string;
    public releaseYear?: Date;
    public languageId?: number;
    public originalLanguageId?: number;
    public rentalDuration?: Date; 
    public length?: number;
    public replacementCost?: number;
    public rating?: number;
    public speacialFeatures? : string;
    public lastUpdate? : Date;
    public actorsDto? : Array<ActorDto>
}