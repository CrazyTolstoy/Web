import React, { useState } from 'react';
import PopUp from '../Accessories/PopUp';
import Sidemenu from '../Accessories/Sidemenu';

function HomePage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [id, setId] = useState(1);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { id, ...user }]);
    setId(id + 1);
    setUser({ firstName: '', lastName: '', email: '' });
  };

  const updateUser = (userId, updatedUser) => {
    const updatedData = data.map((user) => {
      if (user.id === userId) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    setData(updatedData);
  };
  


  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className='wrapperTabela'>
     <Sidemenu/>
    <div className="form">
    <div className="title">Dobrodošli!</div>
    <div className="subtitle">Let's create your account!</div>
    <div className="input-container ic1">
      <input
        id="firstname"
        className="input"
        type="text"
        placeholder=" "
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
      <div className="cut"></div>
      <label htmlFor="firstname" className="placeholder">
        First name
      </label>
    </div>
    <div className="input-container ic2">
      <input
        id="lastname"
        className="input"
        type="text"
        placeholder=" "
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
       />
      <div className="cut"></div>
      <label htmlFor="lastname" className="placeholder">
        Last name
      </label>
    </div>
    <div className="input-container ic2">
      <input
        id="email"
        className="input"
        type="text"
        placeholder=" "
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
     />
      <div className="cut cut-short"></div>
      <label htmlFor="email" className="placeholder">
        Email
      </label>
    </div>
    <button type="submit" className="submit" onClick={handleSubmit}>
      Submit
    </button>
    
  </div>

  <div className='stranicaTabelaTabela'>
    <h1 className='naslov'>Pregled unesenih podataka</h1>
      <table className='tableHome'>
        <thead>
          <tr>
            <th className='idKolona'>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th className='dugmeKolona'>Edit</th>
            <th className='dugmeKolona'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>    
               <PopUp user={item} updateUser={updateUser}/>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

  </div>
);
}
export default HomePage;
