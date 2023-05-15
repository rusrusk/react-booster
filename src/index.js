import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';


const persons = [
	{
		id: 1,
		name: "Ruslan Kultaev",
		number: "322344"
		// important: true
	},
	{
		id: 2,
		name: 'Chiemezie Udoh',
		number: "322344"
		// important: false
	  },
	  {
		id: 3,
		name: 'Phil Jones',
		number: "322344"
		// important: true
	  }
]



ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>);





