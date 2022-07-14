const buildHeaders = () => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return headers;
}

const buildOptions = ( payload, method ) => {
    let options = {
        method,
        headers: buildHeaders(),
    }
    if ( method === "POST" ) {
        options = {...options, body: JSON.stringify(payload)}
    }
    return options
}

const buildPath = (endPoint) => {
    return `http://3.138.158.90:8000/${endPoint}`;
}

const request = async ( endPoint, payload, method )  => {
    const path = buildPath(endPoint);
    const options = buildOptions(payload, method);
    const response = await fetch(path, options);
    if (response.ok) {
        const data = await response.json();
        return data;
    } 
}

export const post = async(endPoint, payload) => await request(endPoint, payload, "POST");
export const get = async(endPoint, payload) => await request(endPoint, payload, "GET");