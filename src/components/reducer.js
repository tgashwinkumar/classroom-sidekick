// import {periods, timetable} from '../components/utils'
import {fs} from 'fs';

let timetable = JSON.parse(fs.readFileSync("../json_data/timetable.json"));
let periods = JSON.parse(fs.readFileSync("../json_data/periods.json"));

export const initialState = {
    timeTable : timetable,
    periods: periods,
}

export const reducer = (state, action) => {
    console.log("From reducer:- ", "\nState: ", state, "\nAction: ", action);
    switch(action.type){
        case "ADD_CLASS":

            break;
        default:

    }
}