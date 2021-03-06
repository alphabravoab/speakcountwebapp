import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getAllSessions }  from '../../actions/sessions'
import SessionItem from './SessionItem'
import mainLogo from '../../images/logo-website.png';
import './SessionsList.css'
import { Link } from 'react-router-dom'



  class SessionsList extends PureComponent {

    componentDidMount(){
      this.props.getAllSessions()
    }


    render() {
      return(

         <div  className="mainList">
           <div className="mailnLogoList"><Link to={"/start"}><img  className="mainLogo" src={mainLogo} alt="speakcount"/></Link></div>


           {this.props.sessions &&
           <div >
             <div className="logos" id="logos"> Scheduled sessions</div>

             {this.props.sessions.map(session=> <SessionItem session={session} />)}


            </div>
           }
           <Link to={"/start"}><button type="submit" className="submit2">Back</button></Link>
         </div>
         )
       }
  }

  const mapStateToProps = state => ({
    sessions: state.sessions === null ?
    null : Object.values(state.sessions).sort((a, b) => a.startTime - b.startTime)
  })

  const mapDispatchToProps = dispatch => {
    return {
        getAllSessions: () => {
        dispatch(getAllSessions());
      }
    };
  };


  export default connect( mapStateToProps, mapDispatchToProps ) (SessionsList)
