import React, {useState,useEffect} from 'react'
import './App.css';
import HomeScreen from './screen/HomeScreen'
import Menu from './feature/_shared/header/Menu'
import Loading from './feature/_shared/loader/Loading'
import {ToastDemo} from './feature/_shared/toast/Toast'
import Modal from './feature/_shared/modal/Modal'
import Intercom from './feature/_shared/intercom/Intercom'

function App() {
	const [state, setState] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
		  console.log('This will run after 4 second!');
		  setState(false);
		}, 4000);
		return () => clearTimeout(timer);
	  }, []);
	  console.log(state)


	if(state){
		return(
			<Loading />
		)
	} else {
		return (
			<div className="container mt-5 ">
				<div className="row justify-content-center" style={{backgroundColor:"#F2F3F4"}}>
					<div className="col-4 shadow-none p-3 bg-light rounded" >
						<div className="row">
							<div className="col-3">
								<ToastDemo />
							</div>
							<div className="col-6">
								<Modal />
							</div>
							<div className="col-3">
								
								test
							</div>
						</div>
						<Menu />
						<HomeScreen />
					</div>
				</div>
			</div>
		  );
	}
  
}

export default App;
