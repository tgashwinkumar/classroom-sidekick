import React from 'react'
import {days, periods} from '../components/utils'
const Scheduler = () => {
    return (
        <div>
            <h1 class="display-4 text-center mt-5 py-3">
                Schedule Classes
            </h1>
            <div className="container">
                <div class="row">
                    <div class="col bg-dark"></div>
                    {
                        periods.map(period => (
                            <div class="col bg-dark text-light py-2 text-center">{`${period.startTime} - ${period.endTime}`}</div>
                        ))
                    }
                </div>
                {
                    days.map(day => (
                        <div className="row pt-1">
                            <div class={`col fw-bold ${(day.id % 2 === 0) ? 'bg-muted':'bg-light'} text-dark py-2 text-center`}>{day.name}</div>
                            {
                                periods.map(period => (
                                    <div class={`col  ${(day.id % 2 === 0) ? 'bg-muted':'bg-light'} text-dark py-2 text-center`}>Not Assigned</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Scheduler
