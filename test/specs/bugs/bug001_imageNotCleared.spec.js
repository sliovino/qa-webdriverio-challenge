import HomePage from '../../pageobjects/home.page.js';
import constant from '../../data/constants.js';

describe('BUG-001 - Image input is not cleared after creating an item.', () => {

    const newItemText = 'Image Input Test';

    beforeAll(async () => {
        await HomePage.open();
    });

    it('Should clear the image input after successfully creating an item.', async () => {

        const imageFilePath = constant.imageLocation
        await HomePage.createItem(imageFilePath.valid_image_320x320, newItemText);

        const imageInputValue = await HomePage.inputImage.getValue();

        expect(imageInputValue).toBe('');
    });

    afterAll(async () => {
        await HomePage.deleteItem(newItemText);
    });

});
