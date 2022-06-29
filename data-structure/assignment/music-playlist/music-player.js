const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        this.playlist.songs.push(song);
    }

    play() {
        // TODO: answer here
        if (this.playlist.isEmpty()) {
            return ""
        }
        
        else 
        {            
            if (this.playlist.isRepeatable) {
                let song = this.playlist.songs[0]
                this.playlist.songs.push(song)
                this.playlist.songs.shift()
                return `Now Playing ${song.singer} - ${song.title}`
            }
            else if(this.playlist.isRepeatable === false )
            {
                let song = this.playlist.songs.shift()
                return `Now Playing ${song.singer} - ${song.title}`
            }
            // {
            //     if (playlistSong.length === 1) 
            //     {
            //         playlistSong.shift();
            //         let song = this.playlist.songs[0]
            //         return `Now Playing ${song.singer} - ${song.title}`;
            //     }
            //     else if (playlistSong.length > 1) 
            //     {
            //         playlistSong.shift();
            //         let song = this.playlist.songs[0]
            //         return `Now Playing ${song.singer} - ${song.title}`;
            //     }
            // }
        }
    }
}