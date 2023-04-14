import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"],
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    headless: false,
  }
};

export default config;
