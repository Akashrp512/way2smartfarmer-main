import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import del from './delete.png';
import call from './telephone.png';
import sms from './sms.png';

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

function ReadBo() {
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
    csvData.push(['Name', 'Phonenumber', 'dateofbirth']);
    Object.entries(data).forEach(([key, value]) => {
      csvData.push([value.Fullname, value.Phonenumber, value.dateofbirth]);
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
      <tr>
        <th>Mark</th>
        <th>Name</th>
        <th>Phonenumber</th>
        <th>Place</th>
      </tr>
    </thead>
    <tbody>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <tr key={key} className="dispinner">
            <td>
              <input type="checkbox" />
            </td>
            <td>{value.Fullname}</td>
            <td>{value.Phonenumber}</td>
            <td>{value.dateofbirth}</td>
            <div style={{display: 'flex', gap:'10px',padding:'5px'}}>
              <button onClick={() => handleDelete(key)}>
                <img src={del} />
              </button>
              <p>
                <a href={`tel:${value.Phonenumber}`}>
                  <img src={call} />
                </a>
              </p>
              <p>
                <a href={`sms:${value.Phonenumber}`}>
                  <img src={sms} />
                </a>
              </p>
            </div>
          </tr>
        ))}
    </tbody>
  </table>
  <button onClick={downloadData} className="downloadbtn">
    Download
  </button>
</div>
);
}
export default ReadBo;
