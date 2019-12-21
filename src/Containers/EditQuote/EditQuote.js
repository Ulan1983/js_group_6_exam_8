import React, {Component} from 'react';
import axiosQuotes from "../../axios-quotes";
import {CATEGORIES} from "../../constants";
import './EditQuote.css';


class EditQuote extends Component {
	state = {
		author: '',
		text: '',
		category: ''
	};

	valueChanged = event => this.setState({[event.target.name]: event.target.value});

	async componentDidMount() {
		const id = this.props.match.params.id;
		const response = await axiosQuotes.get("/quotes/" + id + ".json");

		this.setState({
			author: response.data.author,
			text: response.data.text,
			category: response.data.category
		})
	}

	editQuote = async (event) => {
		event.preventDefault();

		const quote = {
			author: this.state.author,
			text: this.state.text,
			category: this.state.category
		};

		if (this.state.author !== '' && this.state.text !== '') {
			await axiosQuotes.put("/quotes/" + this.props.match.params.id + ".json", quote);
			this.props.history.push('/');
		} else {
			alert('Please fill out all required fields!');
		}
	};


	render() {
		return (
				<div className="edit_quote">
					<h3>Edit quote</h3>
					<form onSubmit={this.editQuote}>
						<div className="edit_quote_category">
							<p>Category</p>
							<select
								name="category"
								value={this.state.category}
								onChange={this.valueChanged}
							>
								{CATEGORIES.map(c => (
									<option key={c} value={c}>{c}</option>
								))}
							</select>
						</div>
						<div className="edit_quote_author">
							<p>Author</p>
							<input
								type="text"
								name="author"
								value={this.state.author}
								onChange={this.valueChanged}
							/>
						</div>
						<div className="edit_quote_text">
							<p>Quote text</p>
							<input
								type="textarea"
								name="text"
								value={this.state.text}
								onChange={this.valueChanged}
							>
							</input>
						</div>
						<div>
							<button className="btn">Edit</button>
						</div>
					</form>
				</div>
		);
	}
}

export default EditQuote;