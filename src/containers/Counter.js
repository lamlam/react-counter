import React from 'react'
import { connect } from 'react-redux'

import Counter from '../components/Counter'
import * as Actions from '../actions/Counter'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
