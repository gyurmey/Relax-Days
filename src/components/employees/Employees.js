import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Employees extends Component {
	render() {
		// Sort the Data Alphabetically
		const sortedData = this.props.employees.sort(function(a, b) {
			if (a.employee_name < b.employee_name) {
				return -1;
			}
			if (a.employee_name > b.employee_name) {
				return 1;
			}
			return 0;
		});

		return (
			<div className="container">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Employee Name</th>
							<th scope="col">Employee Salary</th>
							<th scope="col">Employee Age</th>
						</tr>
					</thead>
					<tbody>
						{sortedData.map((list) => (
							<tr key={list.id}>
								<td>
									<Link onClick={this.props.getEmployee.bind(this, list.id)} to={list.id}>
										{list.employee_name}
									</Link>
								</td>
								<td>{list.employee_salary}</td>
								<td>{list.employee_age}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Employees;
