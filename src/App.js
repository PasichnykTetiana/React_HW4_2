import './App.css';
import React from 'react';
import Text from './Text';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    };
  }

  handlerClick = () => {
    /*     this.setState(function (prevState) {
      return {
        bool: !prevState.bool,
      };
    }); */

    this.setState({
      bool: !this.state.bool,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handlerClick}>Кнопка</button>
        {this.state.bool || <Text />}
      </div>
    );
  }
}

export default App;
