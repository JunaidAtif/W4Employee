import './styles.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App container-fluid">
        <div className='row'>
            <div className='col-12 p-0'>
            <Navbar/>
            </div>
        </div>
    <div className='row p-0'>
      <div className='col-2 p-0 border border-dark'>
      <SideBar/>
      </div>
      <div className='col-10 p-0'>
          COntent Div
      </div>
    </div>
    {/* <div className='row'>
      <div className='col-1 border border-dark'>
1
      </div>
      <div className='col-1 border border-dark'>
 2
      </div>
      <div className='col-1 border border-dark'>
3
      </div>
      <div className='col-1 border border-dark'>
4
      </div>
      <div className='col-1 border border-dark'>
5
      </div>
      <div className='col-1 border border-dark'>
6
      </div>
      <div className='col-1 border border-dark'>
7
      </div>
      <div className='col-1 border border-dark'>
8
      </div>
      <div className='col-1 border border-dark'>
9
      </div>
      <div className='col-1 border border-dark'>
10
      </div>
      <div className='col-1 border border-dark'>
11
      </div>
      <div className='col-1 border border-dark'>
12
      </div>

    </div>
    <div className='row'>
      <div className='col-2 border border-primary'>
        2
      </div>
      <div className='col-10 m-2 border border-primary'>
        10
      </div>
    </div> */}
      </div>
    
    
  );
}

export default App;
