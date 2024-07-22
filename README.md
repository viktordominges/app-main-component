# app-main-component

Explanation:
Imports:

The code starts by importing necessary components and styles.
App Component:

State Initialization: The App component's state is initialized with sample employee data, a search word, and a filter word.
ID Tracking: this.maxId is used to keep track of the next ID for new employees.
deleteItem Method:

This method filters out the employee with the specified id from the data array.
addItem Method:

This method adds a new employee to the data array with the provided name and salary.
onToggleProp Method:

This method toggles a boolean property (like increase or rise) for a specific employee by id.
searchEmployee Method:

This method filters employees based on the searchWord.
onUpdateSearch Method:

This method updates the searchWord in the state.
filterEmployee Method:

This method filters employees based on the filterWord.
onSelectFilter Method:

This method updates the filterWord in the state.
onSalaryChange Method:

This method updates the salary for a specific employee by id.
Render Method:

The render method calculates the number of employees and those with an increase.
It filters and searches employees to get the visibleData.
Components are rendered with their respective props, including the newly added onSalaryChange.
Export:

The App component is exported as the default export, making it available for use in other parts of the application.
This code is organized and modular, adhering to best practices for React components and state management, ensuring maintainability and readability.
