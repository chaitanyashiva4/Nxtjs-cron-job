import { NextRequest, NextResponse } from 'next/server';
import cron from 'node-cron';

const performTask = () => {
  console.log('Cron job running every minute');
};
cron.schedule('*/1 * * * *', () => {
  performTask();
});

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: 'Cron job started' });
}