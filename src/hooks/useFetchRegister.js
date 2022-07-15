import { post } from '../asyncData';
export const UseFetchRegister = ( account ) => {
    return post('server/autenthication/register', account)
    .catch(error => console.error('Error: ', error))
    .then(response =>  console.log('Succefful: ', response));
}