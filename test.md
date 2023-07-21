SOAP, REST and GraphQL 

/* SOAP API Request */

// specify the URL of the SOAP API endpoint
const url = 'http://www.example.com/soap-api';

// specify the SOAP message to send
const soapMessage = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://example.com">' +
    '<SOAP-ENV:Header/>' +
    '<SOAP-ENV:Body>' +
    '<ns1:GetData>' +
    '<ns1:Id>123</ns1:Id>' +
    '</ns1:GetData>' +
    '</SOAP-ENV:Body>' +
    '</SOAP-ENV:Envelope>';

// set the content type of the SOAP message
const contentType = 'text/xml';

// make the fetch request
fetch(url, {
    method: 'POST', // SOAP uses the HTTP POST method to send requests to a server.
    headers: {
        'Content-Type': contentType,
        'SOAPAction': 'http://example.com/GetData'
    },
    body: soapMessage
})
    .then(response => response.text())
    .then(xml => {
        // handle the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const value = xmlDoc.getElementsByTagName('Value')[0].childNodes[0].nodeValue;
        console.log(value);
    })
    .catch(error => console.error(error));


/* SOAP API Response */
<? xml version = "1.0" encoding = "UTF-8" ?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
        <SOAP-ENV:Body>
            <ns1:GetDataResponse xmlns:ns1="http://example.com">
                <ns1:Result>
                    <ns1:Id>123</ns1:Id>
                    <ns1:Value>42</ns1:Value>
                </ns1:Result>
            </ns1:GetDataResponse>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>

/* -------------------------------------------------------------------------------------------------- */

/* REST API Request */

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Access the values within the response here
    })
    .catch(error => console.error(error));


/* REST API Response */

{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

/* -------------------------------------------------------------------------------------------------- */

/* GraphQL API Request */
fetch('https://api.example.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      query {
        user(id: 123) {
          name
          email
          posts {
            title
          }
        }
      }
    `
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  // Access the values within the response here
})
.catch(error => console.error(error));

/* GraphQL API Response */
{
    "data": {
      "user": {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "posts": [
          { "title": "Post 1" },
          { "title": "Post 2" }
        ]
      }
    }
  }

