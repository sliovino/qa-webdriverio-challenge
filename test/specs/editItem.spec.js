import HomePage from '../pageobjects/home.page.js';
import constant from '../data/constants.js';

describe('TC-002 - Edit another existing item.', () => {

    const originalText = 'Test Item Original';
    const editedText = 'Test Item Edited';
    const imageFilePath = constant.imageLocation

    beforeAll(async () => {
        await HomePage.open();
        await HomePage.createItem(imageFilePath.valid_image_320x320, originalText);
    });

    it('Should allow edit an existing item and show the text updated.', async () => {
        await HomePage.editItem(imageFilePath.image_to_edit_320x320, originalText, editedText);

        const oldExists = await HomePage.isItemPresent(originalText);
        expect(oldExists).toBeFalse();

        const newExists = await HomePage.isItemPresent(editedText);
        expect(newExists).toBeTrue();
    });

    afterAll(async () => {
        await HomePage.deleteItem(editedText);
    });

});
