import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Session.css'
import {startAndStopMessage} from '../../actions/sessions'
import Puzzle from './Puzzle'
import Timer from './Timer'

class SessionInProgress extends Component {
  startClick = () => {
    this.props.stopMe(this.props.session.id, "finished")
  }
  componentDidMount() {
  }

  render() {
    
    return (<div className="code" >

      {
        this.props.session && <div className= "code1"><div> {this.props.session.topic} discussion  
        
        {this.props.session.pieces_to_complete}</div>
        <Puzzle />
        
        </div>
      }
     
      <Timer /> 

       <button className="submit" onClick={this.startClick}>
        Stop session
      </button>
   
    </div>)
  }
}
const mapStateToProps = function(state) {
 return {session: state.sessions[0]}
}

const mapDispatchToProps = dispatch => {
  return {
    stopMe: (session, message) => {
      dispatch(startAndStopMessage(session, message))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionInProgress)

