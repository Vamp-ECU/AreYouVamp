class VampireController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindSubmit(this.handleSubmit.bind(this));
        this.view.bindSidebarButtons(this.handleSidebarButtonClick.bind(this));
    }

    handleSubmit() {
        const formData = this.view.getSelectedValues();
    
        fetch('/process_form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(result => {
            this.view.displayResult(`Is the classmate a vampire? ${result}`);
        })
        .catch(error => console.error('Error submitting form:', error));
    }
    

    handleSidebarButtonClick(page) {
        // Handle navigation to different pages
        console.log(`Navigating to ${page} page`);
    }
}

