import React from 'react';
import NavBar from './components/NavBar';
import Admissions from './components/Admissions/Admissions';
import NavigationCards from './components/NavigationCards';
import Graduation from './components/Graduation/Graduation';
import Travel from './components/Travel/Travel';
import Contacts from './components/Contacts/Contacts';
import Resources from './components/Resources/Resources';
import Counseling from './components/Counseling/Counseling';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Admissions />
      <Graduation />
      <Travel />
      <Contacts />
      <Resources />
      <Counseling />
      {/* <NavigationCards /> */}
    </div>
  );
}

export default App;
