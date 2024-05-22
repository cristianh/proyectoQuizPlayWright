import { Page } from "@playwright/test";
import { IYouTubePage } from "../interface/youtube.interface";

export class LoginPage implements IYouTubePage{
    private page: Page;
    constructor(page: Page){
        this.page=page;
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.youtube.com/');
    }

    

}