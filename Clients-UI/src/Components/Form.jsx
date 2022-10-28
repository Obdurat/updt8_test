import React, { useState } from "react";
import { useEffect } from "react";
import { CreateClient, GetCities, GetStates } from "../Api";
import Picker from "./Datepicker";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Form({ show, setShow, refresh }) {
    const [formObj, setFormObj] = useState({
        cpf: '',
        name: '',
        birthDate: '',
        sex: 0,
        city: '',
        state: ''
    })

    const initial = {
        cpf: '',
        name: '',
        birthDate: '',
        sex: 0,
        city: '',
        state: ''
    }

    const [states, setStates] = useState();
    const [cities, setCities] = useState();
    const [startDate, setStartDate] = useState(new Date()); 

    useEffect(() => {
        GetStates().then((sts) => setStates(sts));
        GetCities(1).then((cities) => setCities(cities));
    }, []);

    const handleChange = ({target}) => {
        setFormObj({...formObj, [target.name]: target.value})
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Client</Modal.Title>
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
                        <input id="male" type="radio" name="sex" value="0" onChange={handleChange}/>
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
          <Button variant="primary" onClick={() => CreateClient(formObj, startDate).then((resp) => { refresh(resp); setFormObj({ ...initial }); setShow(false) }) }>
            Create Client
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

