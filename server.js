import http from './app.js'
import mongoConnect from './src/config/mongo.js'

mongoConnect();


const PORT = process.env.PORT || 3000 

http.listen(PORT, () => console.info(`server up and running on port${PORT}`));
