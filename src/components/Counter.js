import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) =>
  <div>
    IT WORKS
    count: {props.count}
  </div>

const mapState = (state, ownProps) => ({ count: state.count * ownProps.amount })

export default connect(mapState)(Counter)
