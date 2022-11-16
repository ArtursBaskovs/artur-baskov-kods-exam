import { reactive } from 'vue'
import sng from '../data/songs.js'
export const player = reactive({
    
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        this.playlist = songs;
    },
    setNowPlaying(song) {
        this.now_playing = song;
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        let nowPlaying = this.playlist.indexOf(this.getNowPlaying());
        return this.playlist[nowPlaying + 1];
    },
    getPreviousSong() {
        let nowPlaying = this.playlist.indexOf(this.getNowPlaying());
        
        let prev = this.playlist[nowPlaying - 1];

        if(prev < 0){
            return;
        }
        return prev;
        
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})