export async function getClients() {
    const request = await fetch("http://localhost:5034/client", { method: 'GET' });
    const response = await request.json();
    console.log(response);
    return response;
}

export async function DeleteClient(id) {
    const request = await fetch(`http://localhost:5034/client/${id}`, {
         method: 'DELETE',
    });
    const response = await request.json();
    return response;
}

export async function GetStates() {
    const request = await fetch(`http://localhost:5034/states`, { method: 'GET' });
    const response = await request.json();
    console.log(response);
    return response;
}

export async function GetCities(id) {
    const request = await fetch(`http://localhost:5034/cities/${+id}`);
    const response = await request.json();
    console.log(response);
    return response;
}

export async function CreateClient(body, date) {
    const dateFmt = date.toJSON();
    const parseBody = JSON.stringify({ ...body, birthDate: dateFmt })
    console.log(parseBody);
    const request = await fetch(`http://localhost:5034/client`, { 
        method: 'POST', 
        body: parseBody,
        headers: { 'Content-Type': 'application/json' },
     });
     const response = await request.json();
    return response;
}

export async function EditClient(body, date, id) {
    const dateFmt = date.toJSON();
    const parseBody = JSON.stringify({ ...body, birthDate: dateFmt })
    console.log(parseBody, id);
    const request = await fetch(`http://localhost:5034/client/${id}`, { 
        method: 'PUT', 
        body: parseBody,
        headers: { 'Content-Type': 'application/json' },
     });
    const response = await request.json();
    return response;
}