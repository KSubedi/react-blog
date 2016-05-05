import React, {Component,PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Link} from "react-router";
import {createPost} from "../actions";

class PostsNew extends Component{
	constructor(props){
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props){
		this.props.createPost(props)
			.then(() => {
				this.context.router.push("/");
			});
	}

	componentWillMount(){
		document.title = "Add A Post - React Blog";

	}

	getErrorClass(element){
		return element.invalid && element.touched ? " has-error" : "";
	}

	getErrorMessage(element){
		return element.invalid && element.touched ? <label className="control-label">{element.error}</label> : "";
	}

	render(){
		const {fields: {
			title, categories, content
		},handleSubmit} = this.props;

		// console.log(this.props);
		return(
				<div className="jumbotron margin-top">
					<h2 className="text-center">Add A New Post</h2>
					<div className="row">
						<div className="col-sm-8 col-sm-offset-2">
							<form onSubmit={handleSubmit(this.onSubmit)}>
								<div className={"form-group margin-top" + this.getErrorClass(title)}>
									{this.getErrorMessage(title)}
									<input type="text" className="form-control" name="title" id="title" placeholder="Title" {...title}/>
								</div>
								<div className={"form-group margin-top" + this.getErrorClass(categories)}>
									{this.getErrorMessage(categories)}
									<input type="text" className="form-control" name="categories" id="categories" placeholder="Categories" {...categories}/>
								</div>
								<div className={"form-group margin-top" + this.getErrorClass(content)}>
									{this.getErrorMessage(content)}
									<textarea className="form-control" name="content" id="content" rows="10" placeholder="Content" {...content}></textarea>
								</div>
								<div className="text-center margin-top">
									<button type="submit" className="btn btn-info">Submit</button>
									<Link to="/" className="btn btn-danger">Cancel</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			);
	}
}

function validate(values){
	const errors = {};

	if(!values.title){
		errors.title = "Title can't be empty!";
	}

	if(values.title && values.title.length <= 5 ){
		errors.title = "Title needs to be longer!";
	}

	if(!values.categories){
		errors.categories = "Categories can't be empty!";
	}


	if(!values.content){
		errors.content = "Content can't be empty!";
	}

	if(values.content && values.content.length <= 10 ){
		errors.content = "Content needs to be longer!";
	}

	return errors;
}

export default reduxForm({
	form: "PostsNew",
	fields: ["title", "categories", "content"],
	validate
}, null, {
	createPost
})(PostsNew);