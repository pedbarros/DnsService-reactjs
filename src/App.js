import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import './App.css';
import DNSTable from './components/DNSTable';
import dnsLookup from './services/dnsLookup';
import DefaultLayout from './_layouts/default';

function App() {
  const [loading, setLoading] = useState(false);
  const [domain, setDomain] = useState('meetupapp.pedrobarros.xyz');
  const [items, setItems] = useState([]);

  async function handleDnsDomain() {
    setLoading(true);
    try {
      const { dnsRecords } = await dnsLookup.loadDnsService(domain);
      if (dnsRecords) {
        const cnames = dnsRecords[0].CNAMERecord.map(record => ({
          id: Math.random(),
          ...record,
        }));
        setItems(cnames);
      }
    } catch (error) {
      setItems([]);
      toast.error(
        'Que pena! Ocorreu um erro na busca! Tente novamente mais tarde!'
      );
    }
    setLoading(false);
  }

  return (
    <DefaultLayout>
      <div className="d-flex flex-column align-items-center mt-5 h-100">
        <Form className="border border-success p-4 p-md-5 rounded-lg mb-5">
          <FormGroup>
            <Label for="domain">Preencha seu dominio:</Label>
            <Input
              id="domain"
              name="domain"
              value={domain}
              onChange={e => setDomain(e.target.value)}
            />
          </FormGroup>
          <Button block color="success" onClick={handleDnsDomain}>
            Buscar
          </Button>
        </Form>

        <div className="w-50 text-center">
          {loading ? <Spinner color="success" /> : <DNSTable items={items} />}
        </div>
        <ToastContainer />
      </div>
    </DefaultLayout>
  );
}

export default App;
