import React from 'react';
import AOS from 'aos';
import {toast} from 'react-toastify';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Landing from './pages/Landing';
import './App.scss';

class App extends React.Component {
  componentDidMount = e => {
    // AOS.init({ disable: 'mobile' });
    AOS.init();
    toast.configure({
      pauseOnHover: false
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar>
            <Route
              exact={true}
              path="/"
              component={Landing}
            />
          </NavigationBar>
        </div>
      </Router>
    );
  }
}

export default App;
