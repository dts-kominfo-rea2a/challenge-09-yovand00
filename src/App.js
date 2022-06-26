//import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const contacts = require("./data/contacts.json");
const components = [];

contacts.forEach((item)=>{
  components.push(<Contact name={item.name} telp={item.phone} email={item.email} photo={item.photo}/>)
})

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      {/* <Contact name={contacts[0].name} telp={contacts[0].phone} email={contacts[0].email}/>; */}
      <Header/>;
      {components};
    </div>
  );
}

export default App;

