import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getFinishedSessions }  from '../../actions/sessions'
import SessionItem from './SessionItem'
import mainLogo from '../../images/logo-website.png';
import './SessionsList.css'
import { Link } from 'react-router-dom'



  class FinishedSessions extends PureComponent {

    componentDidMount(){
      this.props.getFinishedSessions()
    }


    render() {
      return(

         <div  className="mainList">
           <div className="mailnLogoList"><img  className="mainLogo" src={mainLogo} alt="speakcount"/></div>


           {this.props.sessions &&
           <div className="mainList1">
             <div className="logos" id="logos">Archived sessions</div>

             {this.props.sessions.map(session=> <SessionItem  {...session} />)}


            </div>
           }
           <Link to={"/start"}><button type="submit" className="submit2">Back</button></Link>
         </div>
         )
       }
  }

  const mapStateToProps = state => ({
    sessions: state.sessions === null ?
    null : Object.values(state.sessions).sort((a, b) => b.id - a.id)
  })

  const mapDispatchToProps = dispatch => {
    return {
        getFinishedSessions: () => {
        dispatch(getFinishedSessions());
      }
    };
  };


  export default connect( mapStateToProps, mapDispatchToProps ) (FinishedSessions)
