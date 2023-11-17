import { NextRequest, NextResponse } from 'next/server';
import cron from 'node-cron';
import axios from 'axios';

let receivedDataCount = 0;

const fetchData = async () => {
  try {
    const response = await axios.get('https://98fa-2401-4900-4fbd-42ab-71e1-5b00-6b3f-f1bf.ngrok-free.app/api/genarateFakeJson');
    receivedDataCount += 1;
    console.log('Received data:', response.data);
    console.log('Total data count:', receivedDataCount);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

cron.schedule('*/1 * * * *', () => {
  console.log("Cron Running");
  fetchData();
});

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: 'Scheduled data fetch every minute' });
}
