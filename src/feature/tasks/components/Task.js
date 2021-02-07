import React, {useState} from 'react'
import point from '../../../assets/suspensepoint.svg'

import {deleteTask }from '../../../state-manager/actions/taskAction'
import {DELETE_TASK} from '../../../state-manager/actions/taskTypes'
import {useDispatch,useSelector} from 'react-redux'

export default function Task(props) {

	const dispatch = useDispatch();


	const deleteT = (id) => {
		deleteTask(
			dispatch({
				type: DELETE_TASK,
				data: id 
			})
		);
	}
    return (
        <div className="task border-bottom" id={props.id}>
				<span className="taskDetails" onClick={() => console.log('clic')}>
					<span className="taskDate">{props.hour}:{props.minutes}</span>
					<div>
						<span className="taskText">{props.name}</span>
						<span className="taskText taskLocation"><i className="fas fa-map-marker-alt tiny material-icons"></i> {props.location}</span>
					</div>
				</span>
				
				<span className="taskOpen"><i className="fas fa-trash fa-1x" onClick={() => deleteT(props.id)}></i></span>

			</div>
    )
}
