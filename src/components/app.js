import React from 'react';
import { Component } from 'react';
import {Link} from "react-router";

export default class App extends Component {
  render() {
    return (
		<div>
			<div className="alert alert-success margin-top header">
				<h1 className="text-center">
					<Link to="/">React Blog</Link>
				</h1>
			</div>
			<div className="text-right">
				<Link to="/posts/new" className="btn btn-success">Add A Post</Link>
			</div>
			{this.props.children}
		</div>
    );
  }
}
