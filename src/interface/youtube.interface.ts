export interface IYouTubePage{
    goto():Promise<void>;
    enterSong(song:string):Promise<void>;
    selectSong(): Promise<void>;
}