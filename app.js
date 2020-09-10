
const express = require('express')
const mongoose=require('mongoose')
const morgan = require('morgan');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

 require('dotenv').config();


//import routes
const authRoutes=require("./routes/auth");
const userRoutes=require("./routes/user");
const categoryRoutes=require("./routes/category");
const certificateRoutes=require("./routes/certificate");

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology: true
}).then(()=>console.log('Database Connected'))

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware

app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',certificateRoutes);

//port 
const port = process.env.PORT || 8000

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
