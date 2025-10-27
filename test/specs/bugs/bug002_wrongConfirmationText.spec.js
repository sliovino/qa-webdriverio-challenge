import HomePage from '../../pageobjects/home.page.js';
import constant from '../../data/constants.js';

describe('BUG-002 - Incorrect spelling in delete confirmation message.', () => {

    const itemToDelete = 'Delete Message Bug Test';

    beforeAll(async () => {
        await HomePage.open();
        const imageFilePath = constant.imageLocation
        await HomePage.createItem(imageFilePath.valid_image_320x320, itemToDelete);
    });

    it('Should display the correct confirmation message when attempting to delete an item.', async () => {
        
        await HomePage.deleteButtonOf(itemToDelete).click();
        await HomePage.textDeleteConfirmation.waitForDisplayed({ timeout: 10000 });
        const deleteConfirmationText = await HomePage.textDeleteConfirmation.getText();

        expect(deleteConfirmationText).toEqual(constant.deleteModal.deleteConfirmationText);
    });

    afterAll(async () => {
        await HomePage.confirmDelete();
    });

});
