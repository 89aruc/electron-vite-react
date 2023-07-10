import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useState } from 'react'
import { getCurrentCount } from './data/Selectors/StateSelector'
import { decreaseCount, increaseCount } from './data/Actions/StateActions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const mapStateToProps = (state) => ({
  count: getCurrentCount(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increaseCount: (count: number) => dispatch(increaseCount(count)),
  decreaseCount: (count: number) => dispatch(decreaseCount(count))
})

interface IAppProps {
  count: number
  increaseCount: (count: number) => void
  decreaseCount: (count: number) => void
}

function App({ count, increaseCount, decreaseCount }: IAppProps): JSX.Element {
  return (
    <div className="container">
      <div>
        <button
          onClick={() => {
            increaseCount(2)
          }}
        >
          Increase(2)
        </button>
        <button
          onClick={() => {
            decreaseCount(2)
          }}
        >
          Decrease(2)
        </button>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
