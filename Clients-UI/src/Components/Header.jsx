import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "./Form";

export default function Header({ refresh }) {
    const [show, setShow] = useState(false);
    return(
        <div className="header" style={{ backgroundColor: '#5C636A', display: "flex", justifyContent: "space-between", padding: "10px", alignItems: 'center' }}>
            <img width="100px" src="https://c.na39.content.force.com/servlet/servlet.ImageServer?id=0150L00000APKa2QAH&oid=00DE0000000c48tMAA" />
            <Button style={{ height: '50px' }} variant="success" onClick={() => setShow(true)}>Create Client</Button>
            <Form show={show} setShow={setShow} refresh={refresh} />
        </div>
    )
}