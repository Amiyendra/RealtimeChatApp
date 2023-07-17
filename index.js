const express = require("express");
const cors = require("cors");//Cross-Origin Resource Sharing, is a mechanism that allows web applications to make requests to resources from other origins. By default, browsers block cross-origin requests to protect against cross-site scripting (XSS) attacks. CORS allows developers to specify which origins are allowed to make requests to their resources, and what methods and headers are allowed.
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const {username} = req.body;


try{
const r= await axios.put(
  'https://api.chatengine.io/users/',
  {
username:username,secret:username,first_name:username
  },
  {
headers:{"private-key":"e137d6a0-add9-4ba9-9991-c522ea9270bf"}
  }
)
return res.status(r.status).json(r.data)
}
catch(e){
  return res.status(e.response.status).json(e.response.data)
}
  
  
});

app.listen(3001);