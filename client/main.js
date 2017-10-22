//Any JS in here is automatically run for us

//import react library

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

//create a component
class App extends Component{
	constructor(props){
		super(props);
		this.state={ images: [] };
	}


	componentWillMount(){
		//Fantastic place to load data!
	axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
	.then(response => this.setState({ images:response.data.data }));
	}

	render() {
		return(
			<div>
				<ImageList images={this.state.images} />
			</div>
		);
	}	
};

//Render this component
Meteor.startup(()=>{
	ReactDom.render(<App />,document.querySelector('.container'));
		
});