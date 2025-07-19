'use client';

import BalanceCard from './BalanceCard';

const balanceData = {
  balance: 5240.00,
  currency: 'USD',
  currencyName: 'US Dollar',
  status: 'Active',
  upPercentage: 23.65,
  downPercentage: 10.40,
};

export default function BalanceCardDemo() {
  return (
    <div>
      <BalanceCard data={balanceData} />
    </div>
  );
} 