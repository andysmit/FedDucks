import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
const API_SERVER = 'http://localhost:8000/data'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
      			food: "",
      			location: "",
      			number: 0,
		        amount: 0,
			ducks: []
    		};
    		this.handleInputChange = this.handleInputChange.bind(this);
    		this.handleSubmit = this.handleSubmit.bind(this);
		this.getDucks = this.getDucks.bind(this)
		this.showDucks = this.showDucks.bind(this)
  	}

        componentDidMount(){
		this.getDucks();
	}
	getDucks() {
		var dateg = []
                var myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json')
                var requestOptions = {
                        method: 'GET',
                        headers: myHeaders
                }
                fetch("http://localhost:8000/data", requestOptions)
                        .then(response => response.json())
                        .then((data) => {
                                this.setState({ducks: data})
				console.log(this.state.ducks)
                        })
                        .catch(error => console.log('error', error));
		
		
	}
	showDucks() {	
		      console.log(this.state.ducks)
	}
  	handleInputChange(event) {
    		const target = event.target;
    		const value = target.type === 'checkbox' ? target.checked : target.value;
    		const name = target.name;

    		this.setState({
     			[name]: value 
    		});
  	}

  	handleSubmit(event) {
    		alert('Sent' + this.state.time + this.state.food);
    		event.preventDefault();
		var myHeaders = new Headers();
    		myHeaders.append('Content-Type', 'application/json')
    		var requestOptions = {
			method: 'POST',
			mode: 'no-cors',
			headers: myHeaders,
			body: JSON.stringify({
				'time': this.state.time,
				'food': this.state.food,
				'location': this.state.location,
				'number': this.state.number,
				'amount': this.state.amount
			})
    		}	
	 	console.log(requestOptions)
    		fetch("http://localhost:8000/data", requestOptions)
	    		.then(response => response.json())
	    		.then((json) => {
				console.log(json)
		    		return json;
	    		})
	    		.catch(error => console.log('error', error));
  	}

  	render() {
    		return (
    <div>	
       <form onSubmit={this.handleSubmit}>
        <label>
            Time you fed the duck:
            <input
            name="time"
            type="string"
            checked={this.state.time}
            onChange={this.handleInputChange} />
        </label>
       	<br />
        <label>
          Type of the food you fed the duck with
          <input
            name="food"
            type="string"
            value={this.state.food}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Location of the duck
          <input
            name="location"
            type="string"
            value={this.state.location}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of the fed ducks
          <input
            name="number"
            type="number"
            value={this.state.number}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Amount of food you fed. In kg
          <input
            name="amount"
            type="number"
	    step="0.1"
            value={this.state.amount}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>Duck Data</h1>
         <table>
	   <tr>
	     <th>id</th>
	     <th>Time</th>
	     <th>Food Type</th>
	     <th>Location</th>
	     <th>Number of Ducks</th>
	     <th>Amount of food</th> 
	   </tr>
		{this.state.ducks.map((data, key) => {
			return (
				<tr>
					<th>{data.id}</th>
					<th>{data.time}</th>
					<th>{data.food}</th>
					<th>{data.location}</th>
					<th>{data.number}</th>
					<th>{data.amount}</th>
				</tr>
			)
		})}
	 </table>
    </div>
    );
  }
}

export default App;
