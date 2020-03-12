const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/video', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then((connectionInfo)=>{
    console.log("connected");
})

.catch((error)=>{
    console.log("Error", error);
})

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    year: Number,
    rate: Number,
    director: String
});

const MovieModel = mongoose.model("movies", MovieSchema);

MovieModel
    .find()
    .select({_id: 0, title: 1, year: 1, rate: 1, director: 1})
    .sort()
    .then((movies)=>{
        console.log(movies);
    })
    .catch((error)=>{
        console.log(error);
    })