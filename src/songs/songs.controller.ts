import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongCreate } from './models';

@Controller('songs')
export class SongsController {

    constructor(private service: SongsService) { }

    @Get()
    async getAllSongs() {
        const songs = await this.service.getAll();
        return {
            data: songs,
            count: songs.length
        };
    }

    @Post()
    async addSong(@Body() song: SongCreate) {

        const addedSong = await this.service.add(song);
        return addedSong;

    }
}
