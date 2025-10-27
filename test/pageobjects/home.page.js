import Page from './page.js';
import path from 'node:path';
import fs from 'fs';

class HomePage extends Page {

    // Selectors

    get inputText() {
        return $('textarea.form-control'); 
    }

    get btnCreateItem() {
        return $('button=Create Item');
    }

    get itemList() {
        return $$('ul.list-group li'); 
    }

    get inputImage() {
        return $('#inputImage'); 
    }
    
    get btnConfirmDelete() {
        return $('button=Yes, delete it!');
    }

    get textDeleteConfirmation() {
        return $('.modal-body');
    }

    get btnUpdateItem() {
        return $('button=Update Item');
    }

    // Dynamic selector item by text
    itemByText(text) {
        return $(`//li[contains(., "${text}")]`);
    }

    itemByImage(imageName) {
        return $(`img[src='assets/images/"${imageName}"']`);
    }

    // Dynamic Edit button by specific item text
    editButtonOf(text) {
        return this.itemByText(text).$('button=Edit');
    }

    // Dynamic Delete button by specific item text
    deleteButtonOf(text) {
        return this.itemByText(text).$('button=Delete');
    }

    get itemList() { 
        return $$('li[ng-repeat="item in items"]'); 
    }


    // Actions

    // Upload an image    
    async uploadImage(imageFilePath) {
        // Convert relative path to absolute path
        const absolutePath = path.join(process.cwd(), imageFilePath);

        // Verify the file exists
        if (!fs.existsSync(absolutePath)) {
            throw new Error(`File not found: ${absolutePath}`);
        }

        // Upload the file to WebDriver
        const remotePath = await browser.uploadFile(absolutePath);

        await this.inputImage.setValue(remotePath);
    }

    // Create new item
    async createItem(imageLocation, text) {
        await this.uploadImage(imageLocation);
        await this.inputText.setValue(text);

        const initialCount = (await this.itemList).length;

        await this.btnCreateItem.click();

        // Wait for the total number of items to increase
        await browser.waitUntil(async () => {
            const currentCount = (await this.itemList).length;
            return currentCount > initialCount;
        }, {
                timeout: 20000,
                timeoutMsg: `The item list did not update after adding an item`
        });

        // Wait until new item is displayed
        const newItem = await this.itemByText(text);
        await newItem.waitForDisplayed({ timeout: 15000 });
    }

    // Edit an item
    async editItem(imageLocation, originalText, newText) {
        await this.editButtonOf(originalText).click();
        await this.uploadImage(imageLocation);
        await this.inputText.setValue(newText);
        await this.btnUpdateItem.click();
    }

    // Click on Yes, delete it! button displayed in the modal
    async confirmDelete() {
        const btn = await this.btnConfirmDelete;
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.scrollIntoView();
        await btn.waitForClickable({ timeout: 5000 });
        await btn.click();
    }

    // Delete an item
    async deleteItem(text) {
        // Wait until item is displayed
        const item = await this.itemByText(text);
        await item.waitForDisplayed({ timeout: 5000 });

        await this.deleteButtonOf(text).waitForClickable({ timeout: 5000 });
        await this.deleteButtonOf(text).click();

        await this.confirmDelete();

        await item.waitForDisplayed({ reverse: true, timeout: 15000 });
    }

    // Enter image and text description
    async enterImageAndText(imageLocation, text) {
        await this.uploadImage(imageLocation);
        await this.inputText.setValue(text);
    }    

    // Checkers

    // Verify item text is displayed in the List of items
    async isItemPresent(text) {
        await browser.waitUntil(
            async () => (await this.itemList.length) > 0 && await this.itemList[0].isDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'No visible items were found in the list.'
            }
        );
        const item = await this.itemByText(text);
        return item.isExisting();
    }

    // Verify Create Item button is disabled
    async isCreateItemButtonDisabled() {
        return !(await this.btnCreateItem.isEnabled());
    }

    // Verify image is displayed in the List of items
    async isImagePresent(imageName) {
        const image = await this.itemByImage(imageName);
        return image.isExisting();
    }

}

export default new HomePage();
