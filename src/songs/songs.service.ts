import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope: Scope.REQUEST})
export class SongsService {

    private readonly songs = ["My Dear Melanchony"]

    getSongs() {
        return this.songs
    }

    createSong(song) {
        this.songs.push(song)
        return this.songs
    }

    deleteSong(song: string) {
        this.songs.filter((x)=> x!== song)
        return this.songs
    }

    updateSong(song: number) {
        return this.songs
    }
}
