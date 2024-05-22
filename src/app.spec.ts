import { test, expect } from '@playwright/test';
import { getRandomInt } from './utils/random';

test.beforeEach(async ({page})=>{
    await page.goto('https://www.youtube.com/');
});


test.describe('youtube', ()=>{
    test('should search sond', async ({page})=>{
        await page.fill('input[name="search_query"]','mago de oz');

        //await page.keyboard.press("Enter");
        //await page.locator('//*[@id="search-icon-legacy"]').click();

        const listVideos= await page.$$('ytd-item-section-renderer');
        
        //listVideos[getRandomInt(1,listVideos.length)]

    });
});


    