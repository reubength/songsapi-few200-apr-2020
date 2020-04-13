import { NotContains } from 'class-validator';
export interface Song {

    id: string;
    title: string;
    artist: string;
    album: string;
    year: number;
}

export class SongCreate {
    title: string;
    @NotContains('Toad', { message: 'I HATE that band' })
    @NotContains('toad', { message: 'I HATE that band' })
    artist: string;
    album: string;
    year: number;
}

export interface GetSongsResponse {
    data: Song[]
}