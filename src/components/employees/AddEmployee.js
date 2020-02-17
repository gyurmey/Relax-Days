import React, { Component } from 'react';

export class AddEmployee extends Component {
	state = {
		employee_name   : '',
		employee_salary : '',
		employee_age    : '',
		profile_image   : ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.AddEmployee(
			this.state.employee_name,
			this.state.employee_salary,
			this.state.employee_age,
			this.state.profile_image
		);
		this.setState({ employee_name: '' });
		this.setState({ employee_salary: '' });
		this.setState({ employee_age: '' });
		this.setState({ profile_image: '' });
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<h1 style={{ marginTop: '30px', marginBottom: '30px' }}>Add New Employee </h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-row" style={{ marginTop: '30px', marginBottom: '30px' }}>
						<div className="form-group col-md-6">
							<label>
								<strong>Employee Name</strong>
							</label>

							<input
								type="text"
								value={this.state.employee_name}
								onChange={this.onChange}
								name="employee_name"
								className="form-control"
								placeholder="Enter Employee Name..."
							/>
						</div>
						<div className="form-group col-md-6">
							<label>
								<strong>Employee Salary</strong>
							</label>
							<input
								type="number"
								value={this.state.employee_salary}
								onChange={this.onChange}
								name="employee_salary"
								className="form-control"
								placeholder="Enter Employee Salary..."
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>
								<strong>Employee Age</strong>
							</label>
							<input
								type="number"
								value={this.state.employee_age}
								onChange={this.onChange}
								name="employee_age"
								className="form-control"
								placeholder="Enter Employee Age..."
							/>
						</div>
						<div className="form-group col-md-6">
							<label>
								<strong>Profile Image</strong>
							</label>
							<input
								type="url"
								value={this.state.profile_image}
								onChange={this.onChange}
								name="profile_image"
								className="form-control"
								placeholder="Enter Employee image Url..."
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						ADD
					</button>
				</form>
			</div>
		);
	}
}

export default AddEmployee;
