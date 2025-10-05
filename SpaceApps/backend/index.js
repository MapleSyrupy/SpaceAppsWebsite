import express from 'express';
import cors from 'cors';
const app = express();

import { spawn } from 'child_process';
app.use(express.raw({ type: 'text/csv',limit:"10mb" }));
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5173","http://localhost:5173/data"],
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.post("/mldata", (req, res) => {
    if (!req.is('text/csv')) {
        return res.status(400).json({ error: 'Expected CSV data' });
    }
    
    const csvData = req.body;
    
    // Set the appropriate headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=processed_data.csv');
    
    // Send the processed data back
    res.send(csvData);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});