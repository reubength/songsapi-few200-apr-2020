import { Injectable } from '@nestjs/common';
import { Song, SongCreate } from './models';
import * as cuid from 'cuid';
@Injectable()
export class SongsService {
    private songs: Song[] = [
        { id: '1', title: 'Fifteen Feet of Pure White Snow', album: 'No More Shall We Part', artist: 'Nick Cave and the Bad Seeds', year: 1998 },
        { id: '2', title: 'Jack the Ripper', album: 'Let Love In', artist: 'Nick Cave and the Bad Seeds', year: 1992 },
        { id: '3', title: 'Angel from Montgomery', album: 'Best Songs', artist: 'John Prine', year: 1969 }
    ]

    async getAll(): Promise<Song[]> {
        return new Promise((res) => {
            setTimeout(() => res(this.songs), 3000)
        })
    }

    async add(songToAdd: SongCreate): Promise<Song> {
        const song: Song = { ...songToAdd, id: cuid() };
        return new Promise((res, rej) => {
            setTimeout(() => {

                this.songs.push(song);
                res(song);

            }, 3000);
        })
    }
}
