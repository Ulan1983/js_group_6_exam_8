import React, {Component} from 'react';
import axiosQuotes from "../../axios-quotes";
import {NavLink} from "react-router-dom";

class Quotes extends Component {
	state = {
		quotes: []
	};

	async componentDidMount() {
		const response = await axiosQuotes.get('/quotes.json');

		if (response.data) {
			this.setState({quotes: response.data});
		}
	}

	deleteQuote = async (id) => {
		await axiosQuotes.delete('/quotes/' + id + '.json');
		this.props.history.replace('/');
	};
	render() {
		return (
			<div>
				{Object.keys(this.state.quotes).map(id => (
					<div key={id}>
						<p>{this.state.quotes[id].text}</p>
						<p>{this.state.quotes[id].author}</p>
						<button onClick={() => this.deleteQuote(id)}>Delete</button>
						<NavLink to={"/quotes/" + id + "/edit"}>Edit</NavLink>
					</div>
				))}
			</div>
		);
	}
}

export default Quotes;