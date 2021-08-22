import React from 'react';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Landing from './pages/Landing';

class App extends React.Component {
	componentDidMount = (e) => {
		AOS.init();
		emailjs.init(process.env.REACT_APP_EMAILJS_ID);
	};
	render() {
		return (
			<Router>
				<div className='App'>
					<ToastContainer
						position='top-right'
						autoClose={8000}
						hideProgressBar={false}
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnVisibilityChange
						draggable
						pauseOnHover
					/>
					<NavigationBar>
						<Route exact={true} path='/' component={Landing} />
					</NavigationBar>
				</div>
			</Router>
		);
	}
}

export default App;
