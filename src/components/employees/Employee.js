import React, { Component } from 'react';
import Header from '../layout/Header';

class Employee extends Component {
	state = {
		employee_salary : '',
		editing         : false
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.editEmployee(this.state.employee_salary);
		this.setState({
			employee_salary : ''
		});
	};
	Edit = () => {
		this.setState({ editing: !this.state.editing });
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div className="container">
				<Header />
				<h1 style={{ marginTop: '30px', marginBottom: '30px' }}>Single Employee Details</h1>

				<form>
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Employee user ID</th>
								<th scope="col">Employee Name</th>
								<th scope="col">Employee Salary</th>
								<th scope="col">Employee Age</th>
							</tr>
						</thead>
						<tbody>
							{this.props.employee.map((list) => (
								<tr key={list.id}>
									<td>{list.id}</td>
									<td>{list.employee_name}</td>
									{this.state.editing ? (
										<td>
											<div className="edit">
												<input
													style={{
														width        : '100px',
														marginRight  : '20px',
														borderRadius : '3px'
													}}
													type="text"
													name="employee_salary"
													placeholder="Enter Salary..."
												/>
												<button
													style={{
														background   : '#ff0000',
														color        : '#fff',
														border       : 'none',
														padding      : '5px 9px',
														borderRadius : '50%',
														cursor       : 'pointer'
													}}
													onClick={this.Edit}>
													X
												</button>
												<button
													style={{ marginLeft: '20px' }}
													onSubmit={this.onSubmit.bind(this, list.id)}
													type="submit"
													class="btn btn-success ">
													update
												</button>
											</div>
										</td>
									) : (
										<td>
											{list.employee_age}
											<button
												className="btn btn-primary"
												style={{ marginLeft: '30px' }}
												onClick={this.Edit}>
												Edit
											</button>
										</td>
									)}
									<td>{list.employee_salary}</td>
								</tr>
							))}
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

export default Employee;
