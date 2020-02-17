import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Drawer extends Component {
	state = {
		text : ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.filteredItems(this.state.text);

		this.setState({ text: '' });
	};

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link className="navbar-brand" to="/">
						HOME
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/about">
									ABOUT <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item active">
								<Link className="nav-link" to="add">
									ADD <span className="sr-only">(current)</span>
								</Link>
							</li>
						</ul>
						{/* <form >
          <input type="search" />
          <button>Search</button>
          </form>         */}

						<form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
							<input
								className="form-control mr-sm-2"
								type="text"
								name="text"
								placeholder="Search"
								value={this.state.text}
								onChange={this.onChange}
								aria-label="Search"
							/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>

				{/*      
                <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <button className="btn btn-outline-success" type="button">
                   <Link to="/home" >
				Home |{' '}
			</button>

			<Link to="/about">
				About
			</Link>
            </button>
            </form>
            </nav> */}
			</div>
		);
	}
}

export default Drawer;
