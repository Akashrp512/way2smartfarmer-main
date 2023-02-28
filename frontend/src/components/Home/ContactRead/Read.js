import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import SmsIcon from '@mui/icons-material/Sms';

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

function ContactRead() {
  const [data, setData] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDelete = (key) => {
    const dbRef = firebase.database().ref('Customer/' + key);
    dbRef
      .remove()
      .then(() => {
        console.log('Data removed successfully!');
      })
      .catch((error) => {
        console.error('Error removing data: ', error);
      });
  };

  useEffect(() => {
    const dbRef = firebase.database().ref('Customer');
    dbRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const downloadData = () => {
    const csvData = [];
    csvData.push(['Name', 'Phonenumber', 'dateofbirth', 'datetime']);
    Object.entries(data).forEach(([key, value]) => {
      csvData.push([
        value.Fullname,
        value.Phonenumber,
        value.dateofbirth,
        value.Msg,
        value.datetime,
      ]);
    });
    const blob = new Blob([csvData.map((r) => r.join(',')).join('\n')], {
      type: 'text/csv;charset=utf-8;',
    });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCheckboxChange = (key) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter((item) => item !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  return (
    <div>
      <table className="displaycall" id="myTable">
        <thead>
          <tr>Contact us</tr>
          <tr>
            <th>Date & Time</th>
            <th>Mark</th>
            <th>Name</th>
            <th>Phonenumber</th>
            <th>Place</th>
            <th>Messages</th>
          </tr>
        </thead>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <tbody>
              <tr key={key} className="dispinner">
                <td>{value.datetime}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{value.Fullname}</td>
                <td>{value.Phonenumber}</td>
                <td>{value.dateofbirth}</td>
                <td>{value.CMsg}</td>

                <div style={{ display: 'flex', gap: '10px', padding: '5px' }}>
                  <button onClick={() => handleDelete(key)}>
                    <DeleteIcon />
                  </button>
                  <p>
                    <a href={`tel:${value.Phonenumber}`}>
                      <CallIcon />
                    </a>
                  </p>
                  <p>
                    <a href={`sms:${value.Phonenumber}`}>
                      <SmsIcon />
                    </a>
                    <a
                      aria-label="Chat on WhatsApp"
                      href={`https://wa.me/${value.Phonenumber}`}
                    >
                      <WhatsAppIcon />
                    </a>
                  </p>
                </div>
              </tr>
            </tbody>
          ))}
      </table>
      <button onClick={downloadData} className="downloadbtn">
        Download
      </button>
    </div>
  );
}
export default ContactRead;
