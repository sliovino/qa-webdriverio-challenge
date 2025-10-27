import HomePage from '../../pageobjects/home.page.js';
import constant from '../../data/constants.js';

describe('BUG-003 - Image is not updated after editing an existing item.', () => {

    const originalText = 'Original Text';
    const editedText = 'Edited text';
    const imageFilePath = constant.imageLocation

    beforeAll(async () => {
        await HomePage.open();        
        await HomePage.createItem(imageFilePath.valid_image_320x320, originalText);
    });

    it('Should replace the original image with the new one after editing the item.', async () => {
        await HomePage.editItem(imageFilePath.image_to_edit_320x320, originalText, editedText);

        const imageName = constant.imageName;
        const newExists = await HomePage.isImagePresent(imageName.image_to_edit_320x320);
        expect(newExists).toBeTrue();
    });

    afterAll(async () => {
        await HomePage.deleteItem(editedText);
    });

});
