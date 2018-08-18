import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "./components/Modal";

class App extends React.Component {
    render() {
        return (
            <div id="main">
                <Modal />
            </div>
        )
    }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();