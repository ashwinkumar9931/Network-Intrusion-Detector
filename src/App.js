import React,{useState} from 'react';
import SearchAppBar from './components/SearchAppBar';
import BasicTable from './components/BasicTable';
import SignIn from './components/SignIn';

function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
      {loggedIn==false? <SignIn setLoggedIn={setLoggedIn} /> :
       <div>
         <SearchAppBar setLoggedIn={setLoggedIn} />
         <BasicTable />
       </div>}
      
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
