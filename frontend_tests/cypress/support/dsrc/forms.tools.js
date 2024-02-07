/**
 * DSRC - Form Element Tests
 */

const sampleDomElements = {
	TEST_FORM_URL: '/dsrc/',
	// Sample inputs
	INPUT_TEXT: '[name="sample_text"]', // TODO:use a selector of type [data-test='test-id']
	INPUT_PHONE: '[name="sample_phone"]',
	INPUT_EMAIL: '[name="sample_email"]',
	INPUT_PASSWORD: '[name="sample_password"]',
	INPUT_POSTCODE: '[name="sample_postcode"]',
	INPUT_TEXTAREA: '[name="sample_description"]',
	INPUT_BOOLEAN: '[name="sample_boolean"]',
	INPUT_SELECT: '[name="sample_select"]',
	INPUT_DISABLED_INPUT_TEXT: '[name="sample_disabled_field"]',
	INPUT_RADIO_GROUP: '[name="sample_radio_group"',
	INPUT_CHECKBOX_GROUP: '[name="sample_checkbox_group"]',
	// Sample labels
	LABEL_TEXT: `Nom d'usager`, // TODO:use a selector of type [data-test='test-id']
	LABEL_PHONE: `Téléphone`,
	LABEL_EMAIL: `Courriel`,
	LABEL_PASSWORD: `Mot de passe `,
	LABEL_PASSWORD_CHECKBOX: `Afficher`,
	LABEL_POSTCODE: `Code Postal `,
	LABEL_TEXTAREA: `Description`,
	LABEL_BOOLEAN: `Cochez la case `,
	LABEL_SELECT: ` Liste déroulante`,
	LABEL_DISABLED_INPUT_TEXT: `Champ désactivé`,
	LABEL_RADIO_GROUP: `Boutons radio :`,
	LABEL_CHECKBOX_GROUP: `Cases à cocher :`,

	// Sample VALID inputs
	VALID_INPUT_TEXT: 'This is a sample text',
	VALID_INPUT_PHONE: '0033122334455', // TODO: use DSFR Pattern
	VALID_INPUT_PASSWORD: '*Do-487-NoT-$use+THIS-asIS', // "Secure" password example, don't use it outside test environment
	VALID_INPUT_EMAIL: 'julie@example.com',
	VALID_INPUT_POSTCODE: '79700', // TODO: use DSFR Pattern
	VALID_INPUT_TEXTAREA:
		'This is a sample text with many more characters than the input field can handle'.repeat(10),
	VALID_INPUT_BOOLEAN: true,
	VALID_INPUT_SELECT: 'Option 1',
	VALID_INPUT_RADIO: 2,
	VALID_INPUT_CHECKBOX: 1,

	// Sample INVALID inputs
	INVALID_INPUT_TEXT: 'This is a sample text',
	INVALID_INPUT_PHONE: 'abc55', // TODO: use DSFR Pattern
	INVALID_INPUT_PASSWORD: 'unsafe-Passw0rd', // insecure password example
	INVALID_INPUT_EMAIL: 'julieexample.com',
	INVALID_INPUT_POSTCODE: '79',
	INVALID_INPUT_TEXTAREA: '', // Invalid if required
	INVALID_INPUT_BOOLEAN: true,
	INVALID_INPUT_SELECT: 'Sélectionner une option', // Invalid if required
	INVALID_INPUT_RADIO: 3,
	INVALID_INPUT_CHECKBOX: 3
};

class DsrcForm {
	dom;
	fields;
	dataTestPrefix;

	constructor(dataTestPrefix, fields) {
		this.fields = fields;
		this.dataTestPrefix = dataTestPrefix;
		const fieldSelectors = this.generateFieldSelectors(dataTestPrefix, fields);
		this.dom = { ...sampleDomElements, ...fieldSelectors };
		console.log('fieldSelectors', fieldSelectors);
	}

	generateFieldSelectorKey(inputType) {
		console.log('inputType', inputType);
		return `FIELD_${inputType.toUpperCase()}`;
	}

	generateFieldSelectorValue(dataTestPrefix, inputType) {
		return `[data-test='${dataTestPrefix}${inputType}_field']`;
	}

	generateFieldSelectors(dataTestPrefix, fields) {
		const selectors = {};
		Object.keys(fields).forEach((inputType) => {
			selectors[this.generateFieldSelectorKey(inputType)] = this.generateFieldSelectorValue(
				dataTestPrefix,
				inputType
			);
		});
		return selectors;
	}

	generateInputSelectorKey(inputType) {
		console.log('inputType', inputType);
		return `INPUT_${inputType.toUpperCase()}`;
	}

	generateInputSelectorValue(dataTestPrefix, inputType) {
		return `[data-test='${dataTestPrefix}${inputType}_input']`;
	}

	generateInputSelectors(dataTestPrefix, fields) {
		const selectors = {};
		Object.keys(fields).forEach((inputType) => {
			selectors[this.generateInputSelectorKey(inputType)] = this.generateInputSelectorValue(
				dataTestPrefix,
				inputType
			);
		});
		return selectors;
	}

	// Navigation
	navigateToForm() {
		cy.visit(this.dom.TEST_FORM_URL);
	}

	// Verifications

	checkValidity(inputType, isValid = true) {
		// Check if the input is valid
		if (isValid) {
			expect(inputType[0].checkValidity()).to.equal(true);
		} else {
			expect(inputType[0].checkValidity()).to.equal(false);
		}
	}

	enterFieldValueAndAssertState(inputType, isValid = true) {
		const selector = this.generateFieldSelectorValue(this.dataTestPrefix, inputType);
		switch (inputType) {
			case 'text':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_TEXT)
					.type(isValid ? this.dom.VALID_INPUT_TEXT : this.dom.INVALID_INPUT_TEXT)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'phone':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_PHONE)
					.type(isValid ? this.dom.VALID_INPUT_PHONE : this.dom.INVALID_INPUT_PHONE)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'email':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_EMAIL)
					.type(isValid ? this.dom.VALID_INPUT_EMAIL : this.dom.INVALID_INPUT_EMAIL)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'password':
				// TODO: test password visibility too
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_PASSWORD)
					.type(isValid ? this.dom.VALID_INPUT_PASSWORD : this.dom.INVALID_INPUT_PASSWORD)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'postcode':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_POSTCODE)
					.type(isValid ? this.dom.VALID_INPUT_POSTCODE : this.dom.INVALID_INPUT_POSTCODE)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'textarea':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_TEXTAREA)
					.type(isValid ? this.dom.VALID_INPUT_TEXTAREA : this.dom.INVALID_INPUT_TEXTAREA)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'boolean': // this is a checkbox
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.FIELD_BOOLEAN_LABEL)
					.click()
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'select':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_SELECT)
					.select(this.dom.VALID_INPUT_SELECT)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'radio_group':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_RADIO_GROUP)
					.check(isValid ? this.dom.VALID_INPUT_RADIO : this.dom.INVALID_INPUT_RADIO)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'checkbox_group':
				cy.get(selector)
					.should('be.visible')
					.and('contain', this.dom.LABEL_CHECKBOX_GROUP)
					.check(isValid ? this.dom.VALID_INPUT_CHECKBOX : this.dom.INVALID_INPUT_CHECKBOX)
					.then(($input) => {
						checkValidity($input, isValid);
					});
				break;
			case 'disabled_field':
				cy.get(selector).should('be.disabled').and('contain', this.dom.LABEL_DISABLED_INPUT_TEXT);
				break;
			default:
				break;
		}
	}
}

export default { DsrcForm };
