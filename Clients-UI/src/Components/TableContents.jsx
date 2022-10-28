import React from 'react';
import { DeleteClient } from '../Api';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalEdit from './Modaledit';
export default function TableContents(props) {
    const [show, setShow] = useState(false);
    const values = { ...props.obj }
    return (
        <>
            <tbody>
                <tr style={{ textAlign: 'center' }}>
                    <td>{props.obj.id}</td>
                    <td>{props.obj.cpf.toUpperCase()}</td>
                    <td>{props.obj.name.toUpperCase()}</td>
                    <td>{new Date(props.obj.birthDate).toLocaleDateString('pt')}</td>
                    <td>{props.obj.sex.toUpperCase()}</td>
                    <td>{props.obj.city.name.toUpperCase()}</td>
                    <td>{props.obj.state.uf.toUpperCase()}</td>
                    <td><Button variant='warning' onClick={() => setShow(true)}>Edit</Button></td>
                    <td><Button variant='danger' onClick={() => DeleteClient(props.obj.id).then((resp) => props.refresh(resp)) }>Delete</Button></td>
                </tr>
            </tbody>
            <ModalEdit show={show} setShow={setShow} values={values} refresh={props.refresh} />
        </>
    )
}