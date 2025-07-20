'use client'
import RecentTransaction from './RecentTransaction';

const sampleTransactions = [
  {
    id: '1',
    name: 'iPhone 13 Pro MAX',
    business: 'Apple. Inc',
    type: 'Mobile',
    amount: 420.84,
    date: '2022-04-14',
    icon: '📱',
    iconBgColor: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Netflix Subscription',
    business: 'Netflix',
    type: 'Entertainment',
    amount: 100.00,
    date: '2022-04-05',
    icon: 'N',
    iconBgColor: 'bg-red-600'
  },
  {
    id: '3',
    name: 'Figma Subscription',
    business: 'Figma. Inc',
    type: 'Software',
    amount: 244.20,
    date: '2022-04-02',
    icon: 'F',
    iconBgColor: 'bg-purple-600'
  }
];

export default function RecentTransactionDemo() {
  const handleViewAll = () => {
    console.log('View All clicked');
    // Handle navigation to full transaction list
  };

  return (
    <div>
      <RecentTransaction 
        transactions={sampleTransactions}
        onViewAll={handleViewAll}
      />
    </div>
  );
} 