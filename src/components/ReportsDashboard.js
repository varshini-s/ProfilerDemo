import React, { Component } from 'react'
import { Profiler } from 'react';
import LoansRepaymentReports from './LoansRepaymentReports';
import NewAccountReports  from './NewAccountReports';


export class ReportsDashboard extends Component {

    constructor(props){

        super(props);
    
      }

    callbackFunction=(
        id,phase,actualDuration,baseDuration,startTime,commitTime,interaction
    )=>{
        console.log("Id is :"+id+"Phase is : "+phase);

        console.log("Actual duration is : "+actualDuration+
                    "base duration is : "+baseDuration);
    }

    render() {
        
        return (
            <React.Fragment>
                <h2>Welcome to reports dashboard</h2>
                <Profiler id="newAccounts" onRender={this.callbackFunction}>
                    <NewAccountReports></NewAccountReports>
                </Profiler>
                <LoansRepaymentReports></LoansRepaymentReports>

            </React.Fragment>
        )
    }
}

export default ReportsDashboard
