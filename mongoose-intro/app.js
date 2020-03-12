const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then((connectionInfo)=>{
    console.log("connected");
})

.catch((error)=>{
    console.log("Error", error);
})