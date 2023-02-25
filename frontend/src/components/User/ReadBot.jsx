import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function ReadBot() {
  const [data, setData] = useState({});

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

  return (
    <div>
      <table className="displaycall" id="myTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phonenumber</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <tr key={key} className="dispinner">
                <td>{value.Fullname}</td>
                <td>{value.Phonenumber}</td>
                <td>{value.dateofbirth}</td>
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

export default ReadBot;
