import React from 'react';

class ThisYear extends React.Component {
	render(){
		let currentTime = new Date()
		let year = currentTime.getFullYear()
			return year;
	};
};

export default ThisYear;