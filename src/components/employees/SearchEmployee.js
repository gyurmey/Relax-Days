import React, { Component } from 'react';

export class SearchEmployee extends Component {
	render() {
		return this.props.filteredItems.map((list) => (
			<div className="container " style={{ marginTop: '50px', marginBottom: '50px' }}>
				<span className="badge badge-success">
					<h4>Searched Employees </h4>
				</span>
				<table className="table table-sm table-dark">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Employee Name</th>
							<th scope="col">Employee Salary</th>
							<th scope="col">Employee Age</th>
						</tr>
					</thead>
					<tbody>
						<tr key={list.id}>
							<td>{list.employee_name}</td>
							<td>{list.employee_salary}</td>
							<td>{list.employee_age}</td>
						</tr>
					</tbody>
				</table>
			</div>
		));
	}
}

export default SearchEmployee;
