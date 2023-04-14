import { Page } from "@playwright/test";

export default class LoginPage{
  constructor(public page: Page){}

  async login(username: string, password: string){
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickLoginBtn();
  }

  async enterUsername(username: string){
    await this.page.locator("input[name='username']").type(username);
  }

  async enterPassword(password: string){
    await this.page.locator("input[name='password']").type(password);
  }

  async clickLoginBtn(){
    await this.page.click("button[type='submit']");
  }
}