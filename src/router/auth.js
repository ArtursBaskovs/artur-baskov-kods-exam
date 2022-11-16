import router from './index.js';
import { reactive } from 'vue';


const auth = reactive({
    // TE DEFINĒT USER OBJEKTU
    user : {
        name: "Arturs",
        surname: "Baskovs",
        code: "IT21070",
        favorite_songs: []
    },
    
    is_authenticated: localStorage.is_authenticated ?? false,
    favorite_songs: localStorage.favorite_songs ?? "",
    
    setUserData(name, surname, code) {
        name = this.user.name;
        surname = this.user.surname;
        code = this.user.code;


    },

    authenticate(email, password) {
        //alert(email);
        //alert(password);
        if(email == "artur.baskov@va.lv" && password == "123456") {
            //localStorage.setItem('is_authenticated', true);
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.push('/');
            //alert('lets gooooo');
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.push('/login');
    },

    toggleFavorite(songID) {
        let exists = false;
        //nezinu vai izmantot map ir laba ideja
        for( let i = 0; i < user.favorite_songs.length(); i++){
            if(user.favorite_songs[i] == songID) {
                exists = true;
                this.user.favorite_songs.splice(i, 1);
            }
        }
        if(!exists) {
            this.user.favorite_songs.push();
            this.favorite_songs = songID;
        }
        
    },

    getFavoriteSongs() {
        return this.user.favorite_songs;
    }
})


export default auth;