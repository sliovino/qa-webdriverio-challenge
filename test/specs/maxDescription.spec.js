import HomePage from '../pageobjects/home.page.js';
import constant from '../data/constants.js';

describe('TC-004 - Check max long in description.', () => {

    const longText = 'A'.repeat(320);

    beforeAll(async () => {
        await HomePage.open();
    });

    it('Should not allow create an item with more than 300 characters in the description.', async () => {

        const imageFilePath = constant.imageLocation
        await HomePage.enterImageAndText(imageFilePath.valid_image_320x320, longText);

        const disabled = await HomePage.isCreateItemButtonDisabled();
        expect(disabled).toBeTrue();
    });
});
