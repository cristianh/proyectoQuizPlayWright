import { test, Locator, Page } from '@playwright/test';
import { IYouTubePage } from "../interface/youtube.interface";
import { getRandomElement, getRandomInt } from "../utils/random";
import { log } from 'console';

export class YoutubePage implements IYouTubePage {
    private page: Page;
    private titleVideo:String;
    
    constructor(page: Page) {
        this.page = page;
    }


    async goto(): Promise<void> {

        await this.page.goto('https://www.youtube.com/');
        await this.page.waitForSelector('input#search');
       
    }

    async enterSong(song: string): Promise<void> {
        await this.page.click('//*[@id="search-input"]//input')
        await this.page.fill('//*[@id="search-input"]//input', song)
        await this.page.keyboard.press('Enter');
    }


    async selectSong(): Promise<void> {
        await this.page.waitForSelector('ytd-item-section-renderer', { state: 'visible' });
        /* const listVideos = await this.page.$$('ytd-video-renderer');
        let video= getRandomElement(listVideos);
        await video.click(); */
        let ramdomNuber =getRandomInt(1,((await this.page.locator(`//*[@id="contents"]/ytd-video-renderer`).all()).length))
        const titlevideo = await this.page.locator(`(//*[@id="contents"]/ytd-video-renderer[${ramdomNuber}]//yt-formatted-string)[1]`).textContent();
        console.log(titlevideo)
        await this.page.click(`(//*[@id="contents"]/ytd-video-renderer[${ramdomNuber}]//yt-formatted-string)[1]`)
        await this.page.waitForSelector('div#above-the-fold',{ state: 'visible' });
    }
}


