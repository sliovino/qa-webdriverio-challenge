# 📦 QA Automation Challenge – WebdriverIO + Jasmine + POM + Docker

✅ **Project Description**

This project is an automated testing solution for the following web application:
🔗 http://immense-hollows-74271.herokuapp.com/

It was developed as part of a QA Engineer Challenge following best practices for maintainability, scalability, and reliability.

The solution includes:

✅ WebdriverIO (v9) as the core automation tool

✅ Jasmine as the test framework

✅ Page Object Model (POM) structure

✅ Desktop & Mobile (Chrome emulation) coverage

✅ Docker & Docker Compose support

✅ Three real application bugs reported & covered with automated tests


## 🛠️ Tech Stack
```
Technology	                   Purpose

WebdriverIO	                   Web automation
Jasmine	                       Test framework
Page Object Model (POM)	       Code reusability & readability
Docker & Docker Compose	       Containerized execution
Node.js (v22 LTS)	           Runtime
Chrome	                       Browser for execution
GitHub	                       Version control
```

## 📁 Project Structure
```
project-root/
├── test/
│   ├── specs/                      # Functional test cases (Part A)
│   │   ├── createItem.spec.js
│   │   ├── editItem.spec.js
│   │   ├── deleteItem.spec.js
│   │   ├── maxDescription.spec.js
│   │   └── verifyCreatorsItem.spec.js
│   ├── specs/bugs/                # Bug-specific test cases (Part B)
│   │   ├── bug001_imageNotCleared.spec.js
│   │   ├── bug002_wrongConfirmationText.spec.js
│   │   └── bug003_imageNotUpdated.spec.js
│   ├── pageobjects/               # Page Object Model (POM)
│   │   ├── page.js
│   │   └── home.page.js
│   ├── data/
│   │   └── constants.js
│   └── data/images/
│      ├── image_320x320.jpg
│      ├── image_to_edit.jpg
├── wdio.desktop.conf.js           # Desktop configuration
├── wdio.mobile.conf.js            # Mobile configuration (iPhone X emulation)
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## ⚙️ Installation

1️⃣ Install dependencies:

```bash
npm install
```

2️⃣ Run local tests in Desktop mode:
```bash
npm run test:desktop
```

3️⃣ Run local tests in Mobile mode (Chrome device emulation):
```bash
npm run test:mobile
```

🐳 **Run with Docker**

✅ Build and run Desktop tests using Docker Compose:
```bash
docker-compose up --build desktop-tests
```

✅ Build and run Mobile tests using Docker Compose:
```bash
docker-compose up --build mobile-tests
```

📱 **Desktop vs Mobile Execution**
```
Mode	                          Config File	           Command
💻 Desktop	                      wdio.desktop.conf.js	   npm run test:desktop
📲 Mobile (iPhone X emulation)	  wdio.mobile.conf.js	   npm run test:mobile
```

## ✅ Functional Test Cases (Part A)

```
✅ TC-001 – Create an item

Field	                  Description

Test Case ID	          TC-001

Title	                  Create an item

Preconditions             1. Open browser at: http://immense-hollows-74271.herokuapp.com/

Description 	          Validate that a user can successfully create a new item and that it is displayed in the List of items.

Steps                     1. Click "Choose File".
                          2. Select an image (320px x 320px).
                          3. Enter a description in the text field.
                          4. Click the "Create item" button.
                          5. Search for the entered text in the List of items.

Expected Result           The new item is displayed in the List of items with text and image.

Test File                 createItem.spec.js
```
```
✅ TC-002 – Edit another existing item

Field	                  Description

Test Case ID	          TC-002

Title	                  Edit an item

Preconditions             1. Open browser at: http://immense-hollows-74271.herokuapp.com/
                          2. Create an item with text and an image (320px x 320px).

Description 	          Validate that a user can edit an existing item correctly.

Steps                     1. Click the "Edit" button on the newly created item.
                          2. Update the description in the text field.
                          3. Click the "Update item" button.
                          4. Search for the entered text in the List of items.

Expected Result           The item text must be updated correctly.

Test File                 editItem.spec.js
```
```
✅ TC-003 – Delete the item created

Field	                  Description

Test Case ID	          TC-003

Title	                  Delete an item

Preconditions             1. Open browser at: http://immense-hollows-74271.herokuapp.com/
                          2. Create an item with text and an image (320px x 320px).

Description 	          Verify that a user can successfully delete an item.

Steps                     1. Click the "Delete" button on the newly created item.
                          2. Click the "Yes, delete it!" button.

Expected Result           The item should no longer appear in the List of items.

Test File                 deleteItem.spec.js
```
```
✅ TC-004 – Check max long in description

Field	                  Description

Test Case ID	          TC-004

Title	                  Check max long in description

Preconditions             1. Open browser at: http://immense-hollows-74271.herokuapp.com/

Description 	          Check what happens when the user tries to enter text that exceeds the maximum supported limit for the item description.

Steps                     1. Select an image (320px x 320px).
                          2. Entering a description with a length that exceeds the maximum limit (300 characters).

Expected Result           The "Create item" button should remain disabled.

Test File                 maxDescription.spec.js
```
```
✅ TC-005 – Check if exist in the list the item with text “Creators: Matt Duffer, Ross Duffer”

Field	                  Description

Test Case ID	          TC-005

Title	                  Check if exist in the list the item with text “Creators: Matt Duffer, Ross Duffer”

Preconditions             1. Open browser at: http://immense-hollows-74271.herokuapp.com/

Description 	          Validate that the item with the requested text is visible in the List of items.

Steps                     1. Look at the pre-loaded items in the List of items.

Expected Result           The item “Creators: Matt Duffer, Ross Duffer” is visible and correctly displayed in the List of items.

Test File                 verifyCreatorsItem.spec.js
```

## 🐞 Bug Reporting (Part B)

As required in the challenge, three real experience-based bugs were found, documented, and covered with automated tests. These tests currently validate the existing buggy behavior and will need updating once the bugs are fixed.

🧪 **Test Coverage for Bugs**

For each bug found, a Jasmine test case will be added under:
```
test/specs/bugs/
```
Each test will be written to pass once the bug is fixed.

```
✅ BUG-001 – Image input is not cleared after creating an item

Field	              Description

Bug ID	              BUG-001

Title	              Image file name remains visible after creating an item

Steps to Reproduce	  1. Click "Choose File".
                      2. Select an image (320px x 320px).
                      3. Enter a description in the text field.
                      4. Click the "Create item" button.

Expected Result	      The image file input should reset after the item is added.

Actual Result	      The previously selected image file name remains visible.

Severity	          Medium

Status	              Open

Test File	          bug001_imageNotCleared.spec.js
```

```
✅ BUG-002 – Incorrect spelling in delete confirmation message

Field	              Description

Bug ID	              BUG-002

Title	              Delete confirmation message uses incorrect spelling

Steps to Reproduce	  1. Click the "Delete" button on any existing item.
                      2. Observe the confirmation modal message.

Expected Result	      The confirmation message should display: "Are you sure you want to delete this item?".

Actual Result	      The confirmation message displays: "¿Are you shure you want to delete this item?".

Severity 	          Low

Status	              Open

Test File	          bug002_wrongConfirmationText.spec.js
```

```
✅ BUG-003 – Image is not updated after editing an item

Field	              Description

Bug ID	              BUG-003

Title	              Image is not updated after editing an existing item

Steps to Reproduce	  1. Create an item with text and an image (320px x 320px).
                      2. Click the "Edit" button on the newly created item.
                      3. Click "Choose File" and select a different image (320px x 320px).
                      4. Click the "Update item" button.

Expected Result       The new image should replace the previous one and be displayed in the List of items.

Actual Result	      The original image remains displayed; the new image is not applied.

Severity	          High

Status	              Open

Test File	          bug003_imageNotUpdated.spec.js
```

## 📐 Page Object Model (POM) Benefits
```
✔ Reduces code duplication
✔ Improves maintainability
✔ Centralizes locator management
✔ Makes test scripts cleaner and more readable
```

## 🚀 Potential Future Improvements
These enhancements can help increase maintainability, stability, and scalability of the framework over time.

```
Improvement	                                Benefit
Add CI pipeline (GitHub Actions)	        Enables automated test execution in a continuous workflow
Add screenshots on failure	                Enhances debugging and test failure analysis
Support for BrowserStack / cloud devices	Enables real-device cross-platform and remote testing
Negative and validation tests	            Provides stronger functional and edge case coverage
Retry logic for flaky tests	                Improves stability for tests affected by intermittent issues
Add Allure Reporting                        Provides rich visual reports with steps, attachments and trends
Add ESLint                                  Enforces code quality and consistent standards automatically
Add Prettier                                Ensures consistent code formatting across contributors
```

## 👤 Author

Developed by Silvana Iovino as part of a QA Engineer Automation Challenge with a strong focus on good testing practices, real bug discovery, and clean automation architecture.