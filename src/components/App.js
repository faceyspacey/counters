import React from 'react'
import Counter from './Counter'
import CounterButtons from './CounterButtons'
import ChildComponent from './ChildComponent'
import CounterBasic from './CounterBasic'
// import styles from '../css/App'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      count: 0
    }
  }

  isModalOpen() {
    return this.state.showModal ? 'got job' : 'didnt get job'
  }

  toggleModal() {
    const showModal = !this.state.showModal
    this.setState({ showModal: showModal })
  }

  changeCounter() {
    const count = ++this.state.count;
    this.setState({ count });
  }

  dispatchCounterChange() {
    this.props.dispatch({ type: 'INCREMENT', payload: { count: 1 }})
  }

  render() {
    return (
      <div>
        {this.isModalOpen()}
        <ChildComponent handleClick={() => this.toggleModal()} />
        <CounterBasic count={this.state.count} />

        <Counter amount={3} />
        <CounterButtons />

        <button onClick={() => this.changeCounter()}>counter</button>
      </div>
    )
  }
}

  
  
  
  
  
  
  
  
