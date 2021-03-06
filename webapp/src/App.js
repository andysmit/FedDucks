import './App.css';
import { Component } from 'react';
import {Container, Row, Col, Table, Form} from 'react-bootstrap';

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
  	}

        componentDidMount(){
		this.getDucks();
	}
	getDucks() {
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
  	handleInputChange(event) {
    		const target = event.target;
    		const value = target.type === 'checkbox' ? target.checked : target.value;
    		const name = target.name;

    		this.setState({
     			[name]: value 
    		});
  	}

  	handleSubmit(event) {
    		alert('Duck data sent!');
    		event.preventDefault();
		var myHeaders = new Headers();
    		myHeaders.append('Content-Type', 'application/json')
    		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({
				'time': this.state.time,
				'food': this.state.food,
				'location': this.state.location,
				'number': this.state.number,
				'amount': this.state.amount
			})
    		}	
    		fetch("http://localhost:8000/data", requestOptions)
	    		.then(response => response.json())
	    		.catch(error => console.log('error', error));
  	}

  	render() {
    		return (
<Container>
	<Row>
		<Col md={{span:4, offset:4 }}>
			<h1>Enter Duck Data</h1>
		</Col>
	</Row>

	<Row>
		<Form onSubmit={this.handleSubmit}>
			<Form.Label>
				Time you fed the duck(in military time by hour):
				<input
				name="time"
				type="number"
				checked={this.state.time}
				onChange={this.handleInputChange} />
			</Form.Label>
			<br />
			<Form.Label>
			  Type of the food you fed the duck with:
			  <input
				name="food"
				type="string"
				value={this.state.food}
				onChange={this.handleInputChange} />
			</Form.Label>
			<br />
			<Form.Label>
			  Location of the duck:
			  <input
				name="location"
				type="string"
				value={this.state.location}
				onChange={this.handleInputChange} />
			</Form.Label>
			<br />
			<Form.Label>
			  Number of the fed ducks:
			  <input
				name="number"
				type="number"
				value={this.state.number}
				onChange={this.handleInputChange} />
			</Form.Label>
			<br />
			<Form.Label>
			  Amount of food you fed(in kg):
			  <input
				name="amount"
				type="number"
				step="0.1"
				value={this.state.amount}
				onChange={this.handleInputChange} />
			</Form.Label>
			<input type="submit" value="Submit" />
		</Form>
	</Row>

	<Row>
		<Col md={{span:4, offset:4 }}>
			<h1>Duck Data</h1>
		</Col>
	</Row>

	<Row>
		<Table striped bordered hover>
			<thead>
				<tr>
				 <th>id</th>
				 <th>Time</th>
				 <th>Food Type</th>
				 <th>Location</th>
				 <th>Number of Ducks</th>
				 <th>Amount of food</th>
				</tr> 
		   </thead>
			<tbody>
			{this.state.ducks.map((data, key) => {
				return (
				<tr>
					<th>{data.id}</th>
					<th>{data.time}:00</th>
					<th>{data.food}</th>
					<th>{data.location}</th>
					<th>{data.number}</th>
					<th>{data.amount}</th>
				</tr>
				)
			})}
			</tbody>
		</Table>
	</Row>
</Container>
		);
  }
}

export default App;
