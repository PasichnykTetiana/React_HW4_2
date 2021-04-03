import React from 'react';

export default class Text extends React.Component {
  componentDidMount() {
    alert('Открылся');
  }
  componentWillUnmount() {
    alert('Закрылся');
  }
  render() {
    return <div>Text</div>;
  }
}
