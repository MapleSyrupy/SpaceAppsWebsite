import express from 'express';
import cors from 'cors';
const app = express();

const spawn = require('child_process').spawn;
const pythonProcess = spawn('python',["path/to/script.py", arg1, arg2, ...]);
app.use(express.raw({ type: 'text/csv',limit:"10mb" }));
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5173","http://localhost:5173/data"],
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.post("/mldata", (req, res) => {
    const csvData = req.body
    

});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});