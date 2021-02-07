import './App.css';
import HomeScreen from './screen/HomeScreen'
import Menu from './feature/_shared/header/Menu'

function App() {
  return (
    <div className="container mt-5 ">
		<div className="row justify-content-center" style={{backgroundColor:"#F2F3F4"}}>
			<div className="col-4 shadow-none p-3 bg-light rounded" >
				<Menu />
				<HomeScreen />
			</div>
		</div>
	</div>
  );
}

export default App;
