const http= require('./app')
const PORT= process.env.PORT || 3000
http.listen(PORT, ()=> console.info(`server up and running on port${PORT} `));
