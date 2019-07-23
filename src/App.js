import React from 'react';
import { Button } from './components/Buttons';
import Jumbotron from './components/Jumbotron';
import { Container, Col, Row } from './components/Grid';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
      operator: undefined,
      result: undefined
    }

    this.isOperatorChosen = false;
  }

  handleNumberClick = (value) => {
    let name = 'firstNumber';
    if (this.isOperatorChosen) {
      name = 'secondNumber';
    }

    const newValue = this.state[name] + value

    this.setState({
      [name]: newValue
    });
  }

  handleOperatorClick = (value) => {
    if (this.isOperatorChosen || !this.state.firstNumber) {
      return;
    }
    this.setState({
      operator: value
    });
    this.isOperatorChosen = true;
  }

  handleResultClick = () => {
    let val;

    switch (this.state.operator) {
      case '+':
        val = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
        break;
      case '-':
        val = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber);
        break;
      case '*':
        val = parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber);
        break;
      case '/':
        val = parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber);
        break;
    }

    this.setState({
      result: val
    });
  }

  handleClearClick = () => {
    this.isOperatorChosen = false;
    this.setState({
      firstNumber: "",
      secondNumber: "",
      operator: undefined,
      result: undefined
    })
  }

  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <>
        <Jumbotron />

        <Container>

          <Row>
            <Col size="lg-4">
              <Card text="Calculator">
                {numbers.filter(n => n > 0 && n < 4)
                  .map(number => <Button
                    handleClick={this.handleNumberClick}
                    value={number} />)
                }
                <Button
                  handleClick={this.handleOperatorClick}
                  value="+"
                  color="danger" />
                <br /><br />
                {numbers.filter(n => n > 3 && n < 7)
                  .map(number => <Button
                    handleClick={this.handleNumberClick}
                    value={number} />)
                }
                <Button
                  handleClick={this.handleOperatorClick}
                  value="-"
                  color="danger" />
                <br /><br />
                {numbers.filter(n => n > 6 && n < 10)
                  .map(number => <Button
                    handleClick={this.handleNumberClick}
                    value={number} />)
                }
                <Button
                  handleClick={this.handleOperatorClick}
                  value="*"
                  color="danger" />
                <br /><br />
                {numbers.filter(n => n === 0)
                  .map(number => <Button
                    handleClick={this.handleNumberClick}
                    value={number} />)
                }
                <Button
                  handleClick={this.handleOperatorClick}
                  value="/"
                  color="danger" />

                <button onClick={this.handleResultClick} id="button-equal" className="btn btn-success equal" value="equals"><span>=</span></button>
                <br /><br />
                <button onClick={this.handleClearClick} id="button-clear" className="btn btn-dark clear" value="clear"><span>clear</span></button>
              </Card>
            </Col>
            <Col size="lg-6">
              <Card text="Result">
                <h1 id="first-number">{this.state.firstNumber}</h1>
                <h1 id="operator">{this.state.operator}</h1>
                <h1 id="second-number">{this.state.secondNumber}</h1>
                <hr />
                <h1 id="result">{this.state.result}</h1>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
