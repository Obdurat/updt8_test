import { useState, useEffect } from 'react'
import { getClients } from './Api'
import Header from './Components/Header'
import TableContents from './Components/TableContents';
import TableHeader from './Components/TableHeader';
import Table from 'react-bootstrap/Table';

function App() {
  const [clients, setClients] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getClients().then(result => {
      if (result.length < 0) { setClients(false); return; }
      setClients(result)
    })
  }, [refresh]);

  return (
    <>
      <Header refresh={setRefresh} />
      <div className='table'>
        {console.log(clients)}
        {clients ? (
          <Table striped bordered hover>
            <TableHeader obj={clients[0]} />
            {clients.map((client) => <TableContents key={client.id} obj={client} refresh={setRefresh} />)}
          </Table>        
          )
        : (<h2>There are no Clients to Display</h2>) }
      </div>
    </>
  )
}

export default App
