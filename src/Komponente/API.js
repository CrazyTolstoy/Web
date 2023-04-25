import React, { useState } from 'react';
import axios from 'axios';
import Sidemenu from '../Accessories/Sidemenu'

function MyComponent() {
  const [data, setData] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');

  const fetchData = async () => {
    setData([]);
    try {
      const result = await axios.post('https://localhost/api.php', { broj: textFieldValue });
      setData(result.data);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div  className='wrapperTabelaApi'>
      
      <Sidemenu/>
      <div className='tabelaPrikaz'>
        
      <h1 className='naslovApi'>Spisak narudzbi</h1>
      <br/>
      <div className='filter'>
      <div className="input-container ic4">
      <input
        id="firstname"
        className="input"
        type="text"
        placeholder=" "
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value )}
          />
    </div>
      <button className='fetchDugme' onClick={fetchData}>Fetch Data</button>
      </div>
      <table className='apiTable'>
        <thead>
          <tr>
            <th className='datumKolona'>Datum</th>
            <th>Komitent</th>
            <th>Broj Narudzbe</th>
            <th className='tipKolona'>Tip</th>
            <th>Opis</th>
            <th>Organizaciona Jedinica</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(data) && data.length > 0 ? (
    data.map(order => (
      <tr key={order.BrojNarudzbe}>
        <td>{order.Datum}</td>
        <td>{order.Komitent}</td>
        <td>{order.BrojNarudzbe}</td>
        <td>{order.Tip}</td>
        <td>{order.Opis}</td>
        <td>{order.OrgJedinica}</td>
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
