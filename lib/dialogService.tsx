import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Dialog from '../components/dialogs/dialog';
export class dialogService extends Component {

  static create(props: { title: string, Component: JSX.Element }) {
    const containerElement = document.createElement('div');
    containerElement.id = 'portfolio-dialog';
    document.body.appendChild(containerElement);
    return render(<Dialog title={props.title} bodyComponent={props.Component} />, containerElement);
  }

  static close() {
    const dialog = document.getElementById('portfolio-dialog');
    if (dialog){
      ReactDOM.unmountComponentAtNode(dialog);
      dialog.remove();
    }
  }
}