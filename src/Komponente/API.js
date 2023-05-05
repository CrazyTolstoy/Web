import React, { useState, useRef } from 'react';
import axios from 'axios';
import Sidemenu from '../Accessories/Sidemenu';
import { useReactToPrint } from 'react-to-print';
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import '../App.scss';

function MyComponent() {
  const [data, setData] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');
  const componentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'Print',
    className: 'apiTable',
  });

  const fetchData = async () => {
    setData([]);
    try {
      const result = await axios.post('https://localhost/api.php', { broj: textFieldValue });
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const exportToExcel = async () => {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Narudzbe');
      worksheet.columns =  [
        { header: 'Datum', key: 'Datum', width: 15, style: { alignment: { wrapText: true } } },
        { header: 'Komitent', key: 'Komitent', width: 25, style: { alignment: { wrapText: true } } },
        { header: 'Broj Narudzbe', key: 'BrojNarudzbe', width: 20, style: { alignment: { wrapText: true } } },
        { header: 'Tip', key: 'Tip', width: 10, style: { alignment: { wrapText: true } } },
        { header: 'Opis', key: 'Opis', width: 40, style: { alignment: { wrapText: true } } },
        { header: 'Organizaciona Jedinica', key: 'OrgJedinica', width: 80, style: { alignment: { wrapText: true } } },
      ];
      const header = worksheet.getRow(1);
    header.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF0070C0' }
    };
      worksheet.addRows(data);
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'narudzbe.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      // Display success message
      console.log('Excel file exported successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapperTabelaApi">
      <Sidemenu />
      <div className="tabelaPrikaz">
        <h1 className="naslovApi">Spisak narudzbi</h1>
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
          <button className="fetchDugme" onClick={generatePDF}>
            Print
          </button>
          <button className="exportDugme" onClick={exportToExcel}>
            Export to Excel
          </button>
        </div>
        <div className="tabelaOmotacPrint" ref={componentPDF}>
          <table className="apiTable">
            <thead>
              <tr>
                <th className="datumKolona">Datum</th>
                <th>Komitent</th>
                <th>Broj Narudzbe</th>
                <th className="tipKolona">Tip</th>
                <th>Opis</th>
                <th>Organizaciona Jedinica</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? (
                data.map((order) => (
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
    </div>
  );
}


export default MyComponent;