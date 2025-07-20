'use client';

interface Transaction {
  id: string;
  name: string;
  business: string;
  type: string;
  amount: number;
  date: string;
  icon: string;
  iconBgColor: string;
}

interface RecentTransactionProps {
  transactions: Transaction[];
  onViewAll?: () => void;
}

export default function RecentTransaction({ 
  transactions, 
  onViewAll 
}: RecentTransactionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 w-full max-w-[716px] h-[293px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Transaction</h2>
        <button 
          onClick={onViewAll}
          className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1 cursor-pointer"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Transaction List */}
      <div className="space-y-0">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 pb-3 border-b border-gray-200">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            NAME/BUSINESS
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            TYPE
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            AMOUNT
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            DATE
          </div>
        </div>

        {/* Transaction Items */}
        {transactions.map((transaction, index) => (
          <div key={transaction.id} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-100 last:border-b-0">
            {/* NAME/BUSINESS */}
            <div className="flex items-center">
              <div 
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${transaction.iconBgColor}`}
              >
                <span className="text-white font-bold text-sm">{transaction.icon}</span>
              </div>
              <div>
                <div className="font-semibold text-sm whitespace-nowrap text-gray-900">{transaction.name}</div>
                <div className="text-xs text-gray-500">{transaction.business}</div>
              </div>
            </div>

            {/* TYPE */}
            <div className="flex items-center text-text-second">
              {transaction.type}
            </div>

            {/* AMOUNT */}
            <div className="flex items-center font-semibold text-gray-900">
              {formatAmount(transaction.amount)}
            </div>

            <div className="flex items-center text-text-second">
              {formatDate(transaction.date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 