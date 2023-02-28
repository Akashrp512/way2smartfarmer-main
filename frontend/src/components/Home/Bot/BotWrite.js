import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import bot from './bot.png';

const firebaseConfig = {
  apiKey: 'AIzaSyCSo3kRXOAyZF2Nq8wrN-EomKmhSARyQ_U',
  authDomain: 'fir-react-3d5f9.firebaseapp.com',
  databaseURL: 'https://fir-react-3d5f9-default-rtdb.firebaseio.com',
  projectId: 'fir-react-3d5f9',
  storageBucket: 'fir-react-3d5f9.appspot.com',
  messagingSenderId: '582369386866',
  appId: '1:582369386866:web:aac6c1638d0423b9fddab7',
  measurementId: 'G-ZJ6KG03VR8',
};

firebase.initializeApp(firebaseConfig);

function AddCustomer() {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');
  const [datetime, setDatetime] = useState(
    new Date().toLocaleString('en-US', {
      hourCycle: 'h12',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
  );
  const [msg, setMsg] = useState('');
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref('Customer');
    const newCustomerRef = dbRef.push();
    newCustomerRef.set({
      Fullname: fullname,
      Phonenumber: phonenumber,
      dateofbirth: dateofbirth,
      datetime: datetime,
      CMsg: msg,
    });
    setFullname('');
    setPhonenumber('');
    setDateOfBirth('');
    setDatetime(new Date().toISOString());
    setMsg('');
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={toggleForm} className="bot">
        <img src={bot}></img>
        {showForm ? '' : ''}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="callback_from">
          <label>
            Full name:
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>
          <label>
            Phone number:
            <input
              type="number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </label>
          <label>
            Place:
            <input
              type="text"
              value={dateofbirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <label>
            Message:
            <textarea
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </label>
          <input type="hidden" name="datetime" value={datetime} />
          <button type="submit">Call back</button>
        </form>
      )}
    </>
  );
}

export default AddCustomer;
