import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
      <TextFrom heading="Enter a text to analyze below"/>
      </div>

    </>
  );
}

export default App;
