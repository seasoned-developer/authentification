const express                = require('express');
const mongoose               = require('mongoose');
const cors                   = require('cors');
const dotenv                 = require('dotenv');
const helmet                 = require('helmet');
const morgan                 = require('morgan');
const authRoutes             = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoute  = require('./routes/postRoute');
const adminRoute = require('./routes/adminRoutes');
//Configurations
dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log('Connected to server');
});
mongoose.connect(process.env.MONGO_URL, {   
    useNewUrlParser : true, 
    useUnifiedTopology : true
}).then(()=>{
    console.log('Connected to mongoDb');
}).catch((e)=>{
    console.log(e.message);
});
//Routes
app.use('/auth',  authRoutes);
app.use('/user',  userRoutes);
app.use('/post',  postRoute);
app.use('/admin', adminRoute);