class VampireView {
    constructor() {
        this.shadowDropdown = document.getElementById('shadowDropdown');
        this.complexionDropdown = document.getElementById('complexionDropdown');
        this.garlicDropdown = document.getElementById('garlicDropdown');
        this.accentDropdown = document.getElementById('accentDropdown');
        this.resultText = document.getElementById('resultText');
        this.submitButton = document.getElementById('submitButton');
        this.sidebarButtons = document.querySelectorAll('.sidebar-button');
    }

    bindSubmit(handler) {
        this.submitButton.addEventListener('click', handler);
    }

    bindSidebarButtons(handler) {
        this.sidebarButtons.forEach(button => {
            button.addEventListener('click', event => {
                const page = event.target.dataset.page;
                handler(page);
            });
        });
    }

    getSelectedValues() {
        return {
           shadow: this.shadowDropdown.value === 'yes' ? 'yes' : 'no',  // Map dropdown values
           complexion: this.complexionDropdown.value,
           garlic: this.garlicDropdown.value,
           accent: this.accentDropdown.value
        };
    }

    displayResult(result) {
        this.resultText.textContent = result;
    }
}
