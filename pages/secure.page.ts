import { Page } from "@playwright/test";

export default class SecurePage{
  constructor(public page: Page){}
  
  async getSuccessfulMessage(text: string) {
    return this.page.locator('div[id="flash"]', { hasText: text })
  }
}