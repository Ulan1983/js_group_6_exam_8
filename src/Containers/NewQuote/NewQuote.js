import React, {Component} from 'react';
import axiosQuotes from "../../axios-quotes";
import {CATEGORIES} from "../../constants";

class NewQuote extends Component {
	state = {
		author: '',
		text: '',
		category: CATEGORIES[0]
	};

	valueChanged = event => this.setState({[event.target.name]: event.target.value});

	addNewQuote = async (event) => {
		event.preventDefault();

		const newQuote = {
			author: this.state.author,
			text: this.state.text,
			category: this.state.category
		};

		await axiosQuotes.post('/quotes.json', newQuote);
		this.props.history.push('/');
	};
	render() {
		return (
			<div className="new_quote">
				<h3>Submit new quote</h3>
				<form onSubmit={this.addNewQuote}>
					<div className="new_quote_category">
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
					<div className="new_quote_author">
						<p>Author</p>
						<input
							type="text"
							name="author"
							value={this.state.author}
							onChange={this.valueChanged}
						/>
					</div>
					<div className="new_quote_text">
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
						<button className="btn">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

export default NewQuote;