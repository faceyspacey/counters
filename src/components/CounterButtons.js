import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counterActions'


class CounterButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editingCount: ''
    }
  }

  reset = (event) => {
    const editingCount = parseInt(event.target.value)
    this.setState({ editingCount })
  }

  resetTo = () => {
    const newCount = this.state.editingCount;
    this.props.dispatch({ type: 'RESET_TO', payload: { newCount } })
  }

  render() {
    const { dispatch, increment, decrement } = this.props

    return (
      <div>
        <button onClick={increment}>++</button>
        <button onClick={decrement}>--</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>

        <button onClick={this.resetTo}>
          RESET TO {this.state.editingCount}
        </button>

        <input value={this.state.editingCount} onChange={this.reset} />
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

const mapDispatch = { increment, decrement }

export default connect(null, mapDispatch)(CounterButton)
