import xml2js from 'xml2js';
import { api } from './api';

export default {
  loadDnsService(domainName) {
    return new Promise((resolve, reject) => {
      api
        .get('DNSService', {
          params: {
            apiKey: process.env.REACT_APP_DNS_SERVICE_KEY,
            domainName,
            type: 'CNAME',
          },
        })
        .then(res => {
          xml2js.parseString(res.data, (err, jsonData) => {
            if (err) reject(err);
            else resolve(jsonData.DNSData);
          });
        })
        .catch(err => reject(err));
    });
  },
};
