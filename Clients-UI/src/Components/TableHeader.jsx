import React from "react";

export default function TableHeader(props) {
    return(
        <>
        {props.obj ? (
            <thead>
                <tr>
                    {Object.keys(props.obj).map((header) =><th key={header} style={{ textAlign: 'center' }}>{header.toUpperCase()}</th>)}
                </tr>
            </thead>)
            : (<h2>There are no clients to display</h2>)}
        </>
        
    )
}