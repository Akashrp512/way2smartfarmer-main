import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import CallIcon from '@mui/icons-material/Call';
import ContactsIcon from '@mui/icons-material/Contacts';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';

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

function AddCustome() {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref('Customer');
    const newCustomerRef = dbRef.push();
    newCustomerRef.set({
      CName: fullname,
      CPhonenumber: phonenumber,
      CPlace: dateofbirth,
      DAtetime: datetime,
      CMsg: msg,
    });
    setFullname('');
    setPhonenumber('');
    setDateOfBirth('');
    setDatetime(new Date().toISOString());
    setMsg('');
  };

  return (
    <div className="cWrap">
      <div className="Iwrap">
        <h2>Get InTouch</h2>
        <p style={{ color: '#215d0e' }}>
          We Way2Foods supply vegetables and other food products to households,
          apartment and to Horeca segment. Please get in touch with us for fresh
          vegetables. You may also visit our outlet at APMC, Yeshwanthpura,
          Bengaluru.
        </p>
        <div className="mainContact">
          <div className="contactinfo">
            <div>
              <h3>
                <ContactsIcon />
                Contact Address
              </h3>
              <p>
                ಕೃಷಿ ಉದ್ದಿಮೆ ಕೇಂದ್ರ/ Agribusiness Center # 636, BDA Block 2,
                APMC (RMC) Yard, Yeshwanthpura, Bengaluru - 560022
              </p>
            </div>
            <div>
              <h3>
                <ApartmentIcon />
                Registered Office
              </h3>
              <p>
                # 200, 1st Floor, 7th Cross, Soap Factory Layout, Near Tumkur
                Road & Buddajyothi Layout, Nagasandra (P), Bengaluru – 73,
                Karnataka
              </p>
            </div>
            <div>
              <h3>
                <CallIcon />
                Phone & Landline
              </h3>
              <p>+91 8277078435 / 9449004956 080 95000388</p>
            </div>
            <div>
              <h3>
                <MailIcon />
                E-Mail
              </h3>
              <p>way2foods@way2agribusiness.com way2foods@gmail.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="ContactFrom">
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
            <button type="submit">
              <SendIcon />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustome;
