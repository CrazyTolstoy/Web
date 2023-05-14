import React, { useState } from 'react';
import axios from 'axios';
import Sidemenu from '../Accessories/Sidemenu';
import { useReactToPrint } from 'react-to-print';
import ExcelJS from 'exceljs';
import '../App.scss';

function MyComponent() {
  const [data, setData] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');

  const fetchData = async () => {
    setData([]);
    try {
      const result = await axios.get('https://spring-mysql-react-reports-app.herokuapp.com/bilans');
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapperTabelaApi">
      <Sidemenu />
      <div className="tabelaPrikaz">
        <h1 className="naslovApi">Spring</h1>
        <br />
        <div className="filter">
          <div className="input-container ic4">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              value={textFieldValue}
              onChange={(e) => setTextFieldValue(e.target.value)}
            />
          </div>
          <button className="fetchDugme" onClick={fetchData}>
            Fetch Data
          </button>
        </div>
        <table className="apiSpringTable">
          <thead>
            <tr>
              <th className='konto'>Konto</th>
              <th className='pozicija'>Pozicija</th>
              <th className='iznos'>Iznos</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((order) => (
                <tr key={order.konto}>
                  <td>{order.konto}</td>
                  <td>{order.pozicija}</td>
                  <td>{order.iznos}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyComponent;
