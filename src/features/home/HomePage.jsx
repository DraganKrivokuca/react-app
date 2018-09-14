/*jshint esversion: 6 */
import React from 'react';

const HomePage = ({history}) => {
  return (
   <div>
         <div className="ui inverted vertical masthead center aligned segment">
           <div className="ui text container">
             <h1 className="ui inverted stackable header">
               <img
                 className="ui image massive"
                 src="/assets/logo.png"
                 alt="logo"
               />
               <div className="content">Re-play</div>
             </h1>
             <h2>Do whatever you want to do</h2>
             <h4>Let's play </h4>
             <div onClick={() => history.push('/events')} className="ui huge white inverted button">
               Get Started
               <i className="right arrow icon" />
             </div>
           </div>
         </div>
       </div>
  )
}

export default HomePage

