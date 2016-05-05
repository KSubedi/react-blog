import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import {fetchSinglePost, clearCurrentPost, deletePost} from "../actions";

class PostsShow extends Component{
	constructor(props){
		super(props);

		this.deletePost = this.deletePost.bind(this);
	}

	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount(){
		this.props.fetchSinglePost(this.props.params.id);
	}

	componentWillUnmount(){
		this.props.clearCurrentPost();
	}

	deletePost(id){
		this.props.deletePost(id)
			.then(() => {
				this.context.router.push("/");
			});
	}

	render(){
		const {post} = this.props;

		if(!post){
			document.title = "Loading...";
			return(
					<div className="alert alert-warning text-center margin-top">
						<h2>Loading...</h2>
					</div>	
				);
		}else if(post.status === "404"){
			document.title = "404 Post Not Found!";
			return(
					<div className="alert alert-danger text-center margin-top">
						<h2>404 Post Not Found</h2>
					</div>
				);
		}else{		
			document.title = post.title;
			return(
					<div className="jumbotron margin-top">
						<h1>
							{post.title}
							<br/>
							<small>{post.categories}</small>
						</h1>
						<br/>
						<div className="btn btn-danger pull-right" onClick={() => {this.deletePost(post.id)}}>Delete</div>
						<hr/>
						<p>{post.content}</p>
					</div>
				);
		}
	}
}

function mapStateToProps(state){
	return {
		post: state.currentPost
	};
}

export default connect(mapStateToProps, {fetchSinglePost, clearCurrentPost, deletePost})(PostsShow);