import React, { useState } from 'react'
import { useTableValue } from '../components/TableProvider'
const Scheduler = () => {

    const [{timeTable, periods}, dispatch] = useTableValue();

    const addClass = () => {
        dispatch({
            type: "ADD_CLASS",
            item: {
                className: className,
                classLink: classLink,
            }
        })
    }

    const [className, setClassName] = useState(null);
    const [classLink, setClassLink] = useState(null);

    return (
        <div>
            {/* <div className="head-container d-flex flex-row mt-5">
                <div className="btn btn-primary px-4 mx-5 my-3" >Add Class </div>
                <div className="btn btn-secondary px-4 my-3">Save TimeTable</div>
            </div> */}
            <h1 class="display-4 text-center py-3">
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
                    timeTable.table.map(day => (
                        <div className="row pt-1">
                            <div class={`col fw-bold ${(day.dayId % 2 === 0) ? 'bg-muted':'bg-light'} text-dark py-2 text-center`}>{day.dayName}</div>
                            {
                                day.periods.map(period => (
                                    <div class={`col  ${(day.dayId % 2 === 0) ? 'bg-muted':'bg-light'} text-dark py-2 text-center`}>{period.periodName}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="options-container mt-5">
                <h3 className="display-5">
                    Add Class
                </h3>
                <div className="form-group">
                    <label for="classNameInput" className="m-2">Enter the Class Name</label>
                    <input type="text" id="classNameInput" onChange={val => setClassName(val)}/>
                </div>
                <div className="form-group">
                    <label for="classLinkInput" className="m-2">Enter the Class Link</label>
                    <input type="text" id="classLinkInput" onChange={val => setClassLink(val)}/>
                </div>
                <div className="btn btn-primary" onClick={addClass}>
                    Add Class
                </div>
            </div>
            <div className="options-container mt-5">
                {
                    periods.map(period => {
                        
                    })
                }
            </div>
        </div>
    )
}

export default Scheduler
