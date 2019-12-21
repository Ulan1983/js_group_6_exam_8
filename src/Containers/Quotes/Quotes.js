import React, {Component, Fragment} from 'react';
import axiosQuotes from "../../axios-quotes";
import {NavLink} from "react-router-dom";
import './Quotes.css';
import {CATEGORIES} from "../../constants";

class Quotes extends Component {
	state = {
		quotes: []
	};

	loadData = async () => {
		let url = '/quotes.json';

		if (this.props.match.params.name) {
			url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`
		}
		const response = await axiosQuotes.get(url);

		if (response.data) {
			this.setState({quotes: response.data});
		} else {
			this.setState({quotes: ''});
		}
	};

	async componentDidMount() {
		this.loadData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.name !== this.props.match.params.name) {
			return this.loadData();
		}
	}

	deleteQuote = async (id) => {
		await axiosQuotes.delete('/quotes/' + id + '.json');
		this.loadData();
	};
	render() {
		return (
			<Fragment>
				<div className="page">
					<div className="page_div">
						<ul className="page_ul">
							<NavLink to="/">All</NavLink>
							{CATEGORIES.map(c => (
								<li className="page_li" key={c}>
									<NavLink to={"/quotes/" + c}>{c}</NavLink>
								</li>
							))}
						</ul>
					</div>
					{Object.keys(this.state.quotes).map(id => (
						<div className="quotes" key={id}>
							<p><b>Text: </b>"{this.state.quotes[id].text}"</p>
							<p><b>Author: </b>{this.state.quotes[id].author}</p>
							<button className="btn" onClick={() => this.deleteQuote(id)}>Delete</button>
							<NavLink to={"/quotes/" + id + "/edit"}>Edit</NavLink>
						</div>
					))}
				</div>

			</Fragment>
		);
	}
}

export default Quotes;