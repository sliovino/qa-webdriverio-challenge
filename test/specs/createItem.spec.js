import HomePage from '../pageobjects/home.page.js';
import constant from '../data/constants.js';

describe('TC-001 - Create an item.', () => {

    const itemDescription = 'This automated test case creates a new item, it should be shown in the list of items.';

    beforeAll(async () => {
        await HomePage.open();
    });

    it('Should allow you to create a new item and display it in the list.', async () => {
        
        const imageFilePath = constant.imageLocation
        await HomePage.createItem(imageFilePath.valid_image_320x320, itemDescription);

        const exists = await HomePage.isItemPresent(itemDescription);
        expect(exists).toBeTrue();
    });

    afterAll(async () => {
        await HomePage.deleteItem(itemDescription);
    });

});
