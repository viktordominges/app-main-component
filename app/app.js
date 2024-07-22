import { Component } from 'react';

import AppInfo from '../app-info/app-info'; // Component for displaying overall app info
import SearchPanel from '../search-panel/search-panel'; // Component for searching employees
import AppFilter from '../app-filter/app-filter'; // Component for filtering employee list
import EmployeesList from '../employees-list/employees-list'; // Component for listing employees
import EmployeesAddForm from '../employees-add-form/employees-add-form'; // Component for adding new employees

import './app.css'; // Importing styles for the app

class App extends Component {
    constructor(props) {
        super(props);
        // Initial state with some dummy data for employees
        this.state = {
            data: [
                {name: "John S.", salary: 300, increase: false, rise: true, id: 1},
                {name: "Michel J.", salary: 2500, increase: true, rise: false, id: 2},
                {name: "Shain D.", salary: 2800, increase: false, rise: false, id: 3}
            ],
            searchWord: '', // State for search input
            filterWord: 'all' // State for filter selection
        }
        this.maxId = 4; // Initial id for new employees
    }

    // Method to delete an employee by id
    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }));
    } 

    // Method to add a new employee
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // Method to toggle increase or rise properties
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    // Method to search employees by name
    searchEmployee = (items, searchWord) => {
        if (searchWord.length === 0) {
            return items;
        }
        return items.filter(item => item.name.includes(searchWord));
    }

    // Update search word in state
    onUpdateSearch = (searchWord) => {
        this.setState({ searchWord });
    }

    // Filter employees based on selected filter
    filterEmployee = (items, filterWord) => {
        switch(filterWord) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'salaryMoreWhen1000':
                return items.filter(item => item.salary > 1000);
            default: 
                return items;
        }
    }

    // Update filter word in state
    onSelectFilter = (filterWord) => {
        this.setState({ filterWord });
    }

    // Method to change the salary of an employee
    onSalaryChange = (id, newSalary) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: newSalary };
                }
                return item;
            })
        }));
    }

    render() {
        const { data, searchWord, filterWord } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterEmployee(this.searchEmployee(data, searchWord), filterWord);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter 
                        filterWord={filterWord}
                        onSelectFilter={this.onSelectFilter}
                    />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} 
                    onSalaryChange={this.onSalaryChange} // Pass the new handler
                />
                <EmployeesAddForm 
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;
