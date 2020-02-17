import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Employees from './components/employees/Employees';

import Header from './components/layout/Header';
import Drawer from './components/layout/Drawer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Employee from './components/employees/Employee';
import Add from './components/employees/AddEmployee';
import Search from './components/employees/SearchEmployee';

class App extends Component {
	state = {
		employees     : [],
		filteredItems : [],
		employee      : []
	};

	// get Employees
	componentDidMount() {
		axios
			.get('http://dummy.restapiexample.com/api/v1/employees')
			.then((res) => this.setState({ employees: res.data.data }));
	}

	// Search employees
	filteredItems = (filter) => {
		let filteredEmployee = this.state.employees.filter((item) => {
			return item.employee_name.toLowerCase().includes(filter);
		});
		this.setState({ filteredItems: filteredEmployee });
	};

	// get one Employee
	getEmployee = (id) => {
		// axios
		// 	.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
		// 	.then((res) => this.setState({ employee: res.data.data }))
		// 	.catch((err) => console.log(err));

		this.setState({
			employee : this.state.employees.filter((employee) => employee.id === id)
		});

		// fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((myJson) => {
		// 		this.setState({ employee: myJson.data });
		// 	});

		console.log(id);
	};

	// Edit salary
	editEmployee(employee_salary, employee_age, employee_name, id) {
		axios
			.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, {
				employee_salary
				// employee_name,
				// employee_age
			})
			.then((res) =>
				this.setState({
					employees : [
						...this.state.employees,
						res.data.data
					]
				})
			)
			.catch((err) => console.log(err));
	}

	// Add employee
	AddEmployee(employee_name, employee_salary, employee_age, profile_image) {
		axios
			.post('http://dummy.restapiexample.com/api/v1/create', {
				employee_name,
				employee_salary,
				employee_age,
				profile_image
			})
			.then((res) =>
				this.setState({
					employees : [
						...this.state.employees,
						res.data.data
					]
				})
			)
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Drawer filteredItems={this.filteredItems} />

										<Home />
										<Search filteredItems={this.state.filteredItems} />

										<Employees employees={this.state.employees} getEmployee={this.getEmployee} />
									</Fragment>
								)}
							/>

							<Route
								exact
								path="/about"
								render={(props) => (
									<Fragment>
										<Header />

										<About />
									</Fragment>
								)}
							/>
							<Route
								exact
								path="/add"
								render={(props) => (
									<Fragment>
										<Header />

										<Add AddEmployee={this.AddEmployee} />
									</Fragment>
								)}
							/>

							<Employee editEmployee={this.editEmployee} employee={this.state.employee} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
