import React, {useState} from 'react'

import {deleteTask }from '../../../redux/task/taskAction'
import {useDispatch,useSelector} from 'react-redux'

export default function Task(props) {

	const dispatch = useDispatch();
	
    return (
        <div className="task border-bottom" id={props.id}>
				<span className="taskDetails" onClick={() => console.log('detail Task')}>
					<span className="taskDate">{props.hour}:{props.minutes}</span>
					<div>
						<span className="taskText">{props.name}</span>
						<span className="taskText taskLocation"><i className="fas fa-map-marker-alt tiny material-icons"></i> {props.location}</span>
					</div>
				</span>
				
				<span className="taskOpen"><i className="fas fa-trash fa-1x" onClick={() => dispatch(deleteTask(props.id),console.log(props.id))}></i></span>

			</div>
    )
}
