import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Picker from './Datepicker';
import { EditClient, GetStates } from '../Api';
import { GetCities } from '../Api';

export default function ModalEdit({ show, setShow, values, refresh }) {
    const [formObj, setFormObj] = useState({
        cpf: values.cpf,
        name: values.name,
        birthDate: '',
        sex: 0,
        city: '',
        state: ''
    })

    const [startDate, setStartDate] = useState(new Date(values.birthDate));
    const [states, setStates] = useState();
    const [cities, setCities] = useState();

    const handleChange = ({target}) => {
        setFormObj({...formObj, [target.name]: target.value})
    }

    useEffect(() => {
        GetStates().then((sts) => setStates(sts));
        GetCities(1).then((cities) => setCities(cities));
    }, []);

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form style={{ display: 'flex', flexDirection: "column", width: '30%', justifyContent: "center" }}>
                <fieldset style={{ padding: '10px'}}>
                    <label for="cpf" style={{ marginRight: '10px'}}>CPF</label>
                    <input id="cpf" type="text" name="cpf" placeholder="CPF" value={formObj.cpf} onChange={handleChange} />
                    <label for="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Name" value={formObj.name} onChange={handleChange}/>
                    <span>Birth Day</span>
                    <Picker startDate={startDate} setStartDate={setStartDate} />
                </fieldset>
                <fieldset style={{ padding: '10px'}}>
                    <div>
                        <input id="male" type="radio" name="sex" value="0" checked onChange={handleChange}/>
                        <label for="male">Male</label>
                    </div>
                    <div>
                        <input id="female" type="radio" name="sex" value="1" onChange={handleChange}/>
                        <label for="female">Female</label>
                    </div>
                </fieldset>
                <fieldset style={{ display: 'flex', flexDirection: "column", padding: '10px' }}>
                    <label for="stSlector">State</label>
                    <select id="stSlector" name="state" onChange={(e) => { handleChange(e); GetCities(e.target.value).then((cities) => setCities(cities))}}>
                        {states && states.map(state => (<option value={state.id}>{state.uf}</option>))}
                    </select>
                    <label for="citySlector">City</label>
                    <select id="citySlector" name="city" onChange={handleChange}>
                        {cities && cities.map(city => (<option value={city.id}>{city.name}</option>))}
                    </select>
                </fieldset>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => EditClient(formObj, startDate, values.id).then((resp) => { refresh(resp); setShow(false) }) }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}