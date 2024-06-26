/// < reference path="../utils/RandomUtils.ts" />
import { test, Locator, Page, expect } from '@playwright/test';
import { IYouTubePage } from "../interface/youtube.interface";
import { RandomUtils } from '../utils/RandomUtils';




export class YoutubePage implements IYouTubePage {
    private page: Page;
    private titleVideo: String;

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

        const randomElements = await this.page.$$('ytd-video-renderer');
        //const randomIndex = Math.floor(Math.random() * randomElements.length);
        const randomIndex = RandomUtils.getRandomInt(0, randomElements.length)
        const randomElement = randomElements[randomIndex];
        // Hace clic en el elemento aleatorio
        //await randomElement.click();
        await this.page.click(`(//*[@id="contents"]/ytd-video-renderer[${randomIndex}]//yt-formatted-string)[1]`)
        const h3Element = await randomElement.$('h3 yt-formatted-string');
        // Obtiene el texto del elemento h3
        const text = await h3Element?.textContent();

        console.log('Texto del elemento h3:' + text)
        await expect(this.page.locator(`text=${text}`)).toBeVisible()
    }
}


