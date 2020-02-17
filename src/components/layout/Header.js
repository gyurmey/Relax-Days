import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
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
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
