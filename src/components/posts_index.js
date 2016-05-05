import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import {fetchPosts} from "../actions";

class PostsIndex extends Component{
	constructor(props){
		super(props);

		this.getBlogPosts = this.getBlogPosts.bind(this);
	}

	componentWillMount(){
		this.props.fetchPosts();
		document.title = "React Blog";
	}

	getBlogPosts(){
		if(this.props.posts === null){
			return(
					<div className="alert alert-warning text-center margin-top">
						<h3>Loading...</h3>
					</div>
				);
		}else if(this.props.posts.length === 0){
			return(
					<div className="alert alert-danger text-center margin-top">
						<h3>No Blog Posts Available</h3>
					</div>
				);
		}else{
			return this.props.posts.map(function(blogPost){
				return (
						<div className="alert alert-info margin-top post-listing" key={blogPost.id}>
							<h3 className="text-center">
								<Link to={`/post/${blogPost.id}`}>{blogPost.title}</Link>
								<br/>
								<small>{blogPost.categories}</small>
							</h3>
						</div>
					);
			})
		}
		
	}

	render(){
		return (
			<div className="jumbotron margin-top">
				<h2 className="text-center">List Of Blog Posts</h2>
				{this.getBlogPosts()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		posts: state.posts.all
	}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);