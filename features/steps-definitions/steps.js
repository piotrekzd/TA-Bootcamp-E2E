const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the newegg website', async () => {
    await browser.url('https://www.newegg.com/');
});

When('I am on the home page I can close the promo banner, if it appears', async () => {
    try {
        const banner = await $('div.modal-content');
        const closeBtn = await $('button.close');
        await banner.waitForExist({ timeout: 10000 });
        await closeBtn.click();
    } catch (error) {
        console.log('Promo banner is not displayed')
    };
});

When('I entry {string} word in the searchbar', async (value) => {
    const input = await $('input');
    await input.setValue(value);
});

Then('I click on the search button', async () => {
    const searchBtn = await $('button.ico.ico-search');
    await searchBtn.click();
});

Then('I see that at least {int} item appears on the results page', async (number) => {
    const itemsList = await $('div.item-cells-wrap.border-cells.items-grid-view.four-cells.expulsion-one-cell');
    await expect(itemsList).toHaveChildren({ gte: number});
});

When('I open {string} tab', async (position) => {
    const tab = await $('a#trendingBanner_720202.header2021-portal');
    await tab.click();
});

Then('I click on the shop logo in the top left corner', async () => {
    const logo = await $('a.header2021-logo-img');
    await logo.click();
});

Then('I am on the home page again', async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/');
});