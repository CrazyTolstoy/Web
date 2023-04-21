import React, { useState, useEffect } from 'react';
import Sidemenu from '../Accessories/Sidemenu';

function API() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://localhost/Fetch/fetch_NarudzbeAll.php')
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      });
  };
  
  return (
    <div  className='wrapperTabela'>
      <div className='tabelaPrikaz'>
      <Sidemenu/>
      <h1 className='naslov'>Spisak narudzbi</h1>
      <br/>
      <button className='fetchDugme' onClick={fetchData}>Fetch Data</button>
      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Komitent</th>
            <th>Broj Narudzbe</th>
            <th>Tip</th>
            <th>Opis</th>
            <th>Organizaciona Jedinica</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.BrojNarudzbe}>
              <td>{order.Datum}</td>
              <td>{order.Komitent}</td>
              <td>{order.BrojNarudzbe}</td>
              <td>{order.Tip}</td>
              <td>{order.Opis}</td>
              <td>{order.OrgJedinica}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default API;
