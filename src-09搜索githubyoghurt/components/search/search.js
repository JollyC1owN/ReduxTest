import React, { Component } from 'react'


export default class Seach extends Component {
	searchTextRef = React.createRef()
	search = () => { 
		let keyWord = this.searchTextRef.current.value.trim()
		console.log(keyWord)
		this.props.searchAsync(keyWord)
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input type="text" placeholder="enter the name you search" ref={this.searchTextRef}/>
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}
}
