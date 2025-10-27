import HomePage from '../pageobjects/home.page.js';

describe('TC-005 - Check if exist in the list the item with text “Creators: Matt Duffer, Ross Duffer”.', () => {

    const expectedText = 'Creators: Matt Duffer, Ross Duffer';

    beforeAll(async () => {
        await HomePage.open();
    });

    it('Should shown the item "Creators: Matt Duffer, Ross Duffer" in the List of items.', async () => {
        const exists = await HomePage.isItemPresent(expectedText);
        expect(exists).toBeTrue();
    });

});
