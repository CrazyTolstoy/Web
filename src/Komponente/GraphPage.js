import React, { useState, useEffect } from 'react';
import Sidemenu from '../Accessories/Sidemenu';
import { createChart } from '../Accessories/Grafik';

function API() {
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState('');
  const [maxValue, setmaxValue] = useState('');
  const [minValue, setminValue] = useState('');
  const [avg, setAvg] = useState('');
  const [sd, setSd] = useState('');
  const [razlika, setRazlika] = useState('');
  const [title, setTitle] = useState('Naziv grada');
  

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      });
  };
  useEffect(() => {
    if (data.length > 0) {
      setTitle(data[1].metro_area);
    }
  }, [data]);

  useEffect(() => {
    if (dataType === 'Bakolod') {
      fetchData('https://localhost/Mobility/fetch_Bakolod.php'); 
    } else if (dataType === 'Baguio') {
      fetchData('https://localhost/Mobility/fetch_Baguio.php');
    } else if (dataType === 'Manila') {
      fetchData('https://localhost/Mobility/fetch_Manila.php');
    }
  }, [dataType]);

  useEffect(() => {
    if (data.length > 0) {
      createChart(
        data.map((post) => post.day_of_week),
        data.map((post) => parseFloat(post.parks)),
        data.map((post) => parseFloat(post.workplaces)),
        data.map((post) => parseFloat(post.residential))
      );
    }
  }, [data]);

  const handleClick = (type) => {
    setDataType(type);
    setmaxValue(''); 
    setminValue('');
    setAvg(''); 
    setSd('');
    setRazlika('');

  };
  const handleParkClick = () => {
    setmaxValue(data[0].maximumP); 
    setminValue(data[0].minimumP); 
    setAvg(data[0].averageP); 
    setSd(data[0].standardna_devijacijaP); 
    setRazlika(data[0].razlikaP); 
  };

  const handlePosaoClick = () => {
    setmaxValue(data[0].maximumPo); 
    setminValue(data[0].minimumPo); 
    setAvg(data[0].averagePo); 
    setSd(data[0].standardna_devijacijaPo); 
    setRazlika(data[0].razlikaPo); 
  }; 
  
  const handleDomClick = () => {
    setmaxValue(data[0].maximumD); 
    setminValue(data[0].minimumD); 
    setAvg(data[0].averageD); 
    setSd(data[0].standardna_devijacijaD); 
    setRazlika(data[0].razlikaD); 
  };

  return (
    <div className='graphPage'>
      <Sidemenu/>
      <div className='trakaDugmad'>
      <button className='graphDugme' onClick={() => handleClick('Bakolod')}>
      Bacolod
      </button>
      <button className='graphDugme' onClick={() => handleClick('Baguio')}>
      Baguio
      </button>
      <button className='graphDugme' onClick={() => handleClick('Manila')}>
      Manila
      </button>
      </div>
      <h1 className='naslov'>{title}</h1>
      
      <div className='horizontalnaTraka'>
      <div id='myChart'></div>
      <div className="formaGraph">
      <button type="submit" className="b1" onClick={handleParkClick}>
      Parkovi
    </button>
    <button type="submit" className="b1" onClick={handleDomClick}>
      Dom
    </button>
    <button type="submit" className="b1" onClick={handlePosaoClick}>
      Posao
    </button>
    <div className="input-container ic2">
      <input
        id="max"
        className="input"
        type="text"
        placeholder=" "
        value={maxValue}
        onChange={(e) => setmaxValue(e.target.value)}
        disabled="true"
          />
      <div className="cut cut-short-graph"></div>
      <label htmlFor="firstname" className="placeholder">
        Najveca promena
      </label>
    </div>
    <div className="input-container ic2">
      <input
        id="min"
        className="input"
        type="text"
        placeholder=" "
        value={minValue}
        onChange={(e) => setminValue(e.target.value)}
        disabled="true"
       />
      <div className="cut cut-short-graph"></div>
      <label htmlFor="lastname" className="placeholder">
        Najmanja promena
      </label>
    </div>
    <div className="input-container ic2">
      <input
        id="avg"
        className="input"
        type="text"
        placeholder=" "
        value={avg}
        onChange={(e) => setAvg(e.target.value)}
        disabled="true"
     />
      <div className="cut cut-short-graph"></div>
      <label htmlFor="email" className="placeholder">
        Prosek
      </label>
    </div> <div className="input-container ic2">
      <input
        id="sd"
        className="input"
        type="text"
        placeholder=" "
        value={sd}
        onChange={(e) => setSd(e.target.value)}
        disabled="true"
     />
      <div className="cut cut-short-graph"></div>
      <label htmlFor="email" className="placeholder">
        Standardna devijacija
      </label>
    </div>
    <div className="input-container ic2">
      <input
        id="dif"
        className="input"
        type="text"
        placeholder=" "
        value={razlika}
        onChange={(e) => setRazlika(e.target.value)}
        disabled="true"
     />
      <div className="cut cut-short-graph"></div>
      <label htmlFor="email" className="placeholder">
        Razlika Max i Min
      </label>
    </div>
    </div>
  </div>
    </div>
  );
}
export default API;