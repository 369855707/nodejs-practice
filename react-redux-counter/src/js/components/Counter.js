import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/index'

const mapStateToProps = state => {
    return { count: state.count }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: count => dispatch(Actions.increment(count)),
        decrement: count => dispatch(Actions.decrement(count))
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handlerIncrement = this.handlerIncrement.bind(this)
        this.handlerDecrement = this.handlerDecrement.bind(this)
    }

    handlerIncrement = () => {
        this.props.decrement(this.props.count);
    }
    handlerDecrement = () => {
        this.props.increment(this.props.count);
    }

    render() {
        return (
            <div>
                <span>count : </span>
                <button onClick={this.handlerIncrement} value="-">-</button>
                <span>{this.props.count}</span>
                <button onClick={this.handlerDecrement} value="+">+</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
