'use client';

import { useState } from 'react';

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

interface TransactionTableProps {
  transactions: Transaction[];
  itemsPerPage?: number;
  onViewAll?: () => void;
}

export default function TransactionTable({ 
  transactions, 
  itemsPerPage = 5,
  onViewAll 
}: TransactionTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Transaction</h2>
        <button 
          onClick={onViewAll}
          className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAME/BUSINESS
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                TYPE
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                AMOUNT
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                DATE
              </th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr key={transaction.id} className={index !== currentTransactions.length - 1 ? 'border-b border-gray-100' : ''}>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${transaction.iconBgColor}`}
                    >
                      <span className="text-white font-bold text-sm">{transaction.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{transaction.name}</div>
                      <div className="text-sm text-gray-500">{transaction.business}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">{transaction.type}</td>
                <td className="py-4 px-4 font-semibold text-gray-900">{formatAmount(transaction.amount)}</td>
                <td className="py-4 px-4 text-gray-900">{formatDate(transaction.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)} of {transactions.length} results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 text-sm rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 