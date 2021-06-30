import axios from 'axios';


const url = "http://5.196.225.103/bonplan-0.0.1-SNAPSHOT/getAll?fbclid=IwAR2NCTWpmbkgQLchYgkXbaRsTluz31N0Oi8LalqtrDSA785V49zOE5Q3uJ4";

export const fakeApi = () => axios.get(url);


