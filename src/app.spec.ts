import { test, expect, chromium } from '@playwright/test';
import { YoutubePage } from './pageObject/youtubePage';

let youtubePage:YoutubePage;

test.beforeEach(async ({ page }) => {
    youtubePage=new YoutubePage(page);
    await youtubePage.goto()
});


test.describe('youtube', () => {
    test('should search sond', async ({ page }) => {
        const findSong="mago de oz";
        await youtubePage.enterSong(findSong);
        await youtubePage.selectSong();
    });
});