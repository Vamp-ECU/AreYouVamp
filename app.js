// Instantiate the model, view, and controller
const model = new VampireModel();
const view = new VampireView();
const controller = new VampireController(model, view);

// Display the vampire input form by default
view.displayVampireInputForm();
