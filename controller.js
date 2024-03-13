class VampireController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindSubmit(this.handleSubmit.bind(this));
        this.view.bindSidebarButtons(this.handleSidebarButtonClick.bind(this));
    }

    handleSubmit() {
        const formData = this.view.getSelectedValues();
        const result = this.model.isVampire(formData.shadow, formData.complexion, formData.garlic, formData.accent);
        this.view.displayResult(`Is the classmate a vampire? ${result}`);
     }

    handleSidebarButtonClick(page) {
        // Handle navigation to different pages
        console.log(`Navigating to ${page} page`);
    }
}

