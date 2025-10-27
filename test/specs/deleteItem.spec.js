import HomePage from '../pageobjects/home.page.js';
import constant from '../data/constants.js';

describe('TC-003 - Delete the item created.', () => {

    const itemToDelete = 'Item to Delete';
    const imageFilePath = constant.imageLocation

    beforeAll(async () => {
        await HomePage.open();
        await HomePage.createItem(imageFilePath.valid_image_320x320, itemToDelete);
    });

    it('Should allow delete the item and it should not be shown in the List of items.', async () => {

        await HomePage.deleteItem(itemToDelete);

        const exists = await HomePage.isItemPresent(itemToDelete);
        expect(exists).toBeFalse();
    });

});
