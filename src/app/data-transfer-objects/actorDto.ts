import { FilmDto } from "./filmDto";

export class ActorDto {
    public actorId?: number;
    public firstName?: string;
    public lastName? : string;
    public lastUpdate? : Date;
    public filmsDto?: Array<FilmDto>
}