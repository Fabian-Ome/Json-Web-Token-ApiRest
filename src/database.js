import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(console.log('hola'), error))
