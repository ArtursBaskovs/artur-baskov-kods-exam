
<script>
    import songs from '../data/songs';
    import { player } from '../stores/player';
    import auth from '../router/auth';
    export default {
        data() {
            return {
                searchVal: '',
                show_favorites: false,
                thState: false,
                thClickCount: 0,
                songs: songs,

                songClickCount: 0,
                clickTimer: null,

                nowPlayinID: ""
            }
        },
        methods: {
            handleScroll(event) {
                this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
            },
            reverseVar() {
                this.show_favorites = !this.show_favorites;
            },
            changeThTitleState(){
                this.thClickCount++
                if(this.thClickCount > 0) {
                    this.thState = true;
                }
                if(this.thClickCount > 2) {
                    this.thState = false;
                    this.thClickCount = 0;
                }
            },
            sortBy(byParam) {
                if(byParam == 'name') {
                    this.changeThTitleState();
                    //alert(this.thState);
                }
                if(byParam == 'duration') {
                    this.changeThTitleState();
                    //alert(this.thState);
                }
                
            },

            
            selectSong(song) {
                
                this.songClickCount++;
                if(this.songClickCount == 1) {
                    setTimeout( () => {
                        this.songClickCount = 0;
                    }, 1500)
                }
                if(this.songClickCount == 2) {
                    //alert('second click');
                    player.setNowPlaying(song);
                    this.nowPlayinID = player.getNowPlayingSongId();
                }
            },

            getArtist(artists) {
                let text = '';
                artists.forEach(el => {
                    text += el.name + ', ';
                });
                return text;
            },
            getTime(duration) {
                const sec = Math.floor((duration / 1000) % 60);
                const min = Math.floor((duration / 1000 / 60) %60);
                
                let time = min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0");
                return time;
            },

            itIsFavSong(favId) {
                auth.getFavoriteSongs().forEach(el => {
                    if(favId == el){
                        return true;
                    }
                });
            }
        },

    }

</script>
<template>
    
    <div id="songs-view " @scroll="handleScroll">
    <div class="wrapper-header">
        <h1>SONGS</h1>
        <div class="wrapper-search">
            <input id="input-search" placeholder="Search by title..." v-model="searchVal" />
        </div>
        <div class="wrapper-settings">
            <button id="btn-show-favorites" @click="reverseVar" >Show Favorites</button>
        </div>
    </div>
    <div class="wrapper-songs">
        <table cellspacing="0" cellpadding="0">
            <tr ref="header">
                <th id="th-id" >#</th>
                <th id="th-title" @click="sortBy('name')" :class="{ 'active': thState }">
                    Title
                    <IconCaretUp  v-if="thState" :class="{ 'flip-vertical': thClickCount == 2 }" />
                </th>
                <th id="th-artist">Artist</th>
                <th id="th-album">Album</th>
                <th id="th-duration" @click="sortBy('duration')" :class="{ 'active': thState }">
                    Duration
                    <IconCaretUp v-if="thState" :class="{ 'flip-vertical': thClickCount == 2 }"/>
                </th>
            </tr>
            <!-- Loop goes on this <tr> element -->
            <tr class="song" v-for="(song, index) in songs" @click="selectSong(song)" :class="{ 'active': nowPlayinID == song.id }">
                <td id="td-index">
                    <IconPlay v-if="nowPlayinID == song.id"/>
                    <span id="txt-index">{{index + 1}}</span>
                </td>
                <td id="td-title">
                    <img id="img-album" 
                    :src="song.album.images[0].url" 
                    :width = "song.album.images.width"
                    :height = "song.album.images.height"
                    />
                    {{song.name}}
                </td>
                <td id="td-artist">{{getArtist(song.artists)}}</td>
                <td id="td-album">{{song.album.name}}</td>
                <td id="td-duration">
                    {{getTime(song.duration_ms)}}
                    <IconHeart :class="{ 'active': itIsFavSong(song.id) }"/>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>