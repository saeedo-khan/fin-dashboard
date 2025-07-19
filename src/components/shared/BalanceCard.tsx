'use client';

import { useTheme } from '@/components/ThemeProvider';

interface BalanceData {
  balance: number;
  currency: string;
  currencyName: string;
  status: string;
  upPercentage?: number;
  downPercentage?: number;
}

interface BalanceCardProps {
  data: BalanceData;
}

export default function BalanceCard({ data }: BalanceCardProps) {
  const { theme } = useTheme();

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: data.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="bg-card rounded-lg border border-border pr-[31px] py-5 pl-5 h-[181px] w-[375px]">
      <div className="space-y-20">
      <div>
        <p className="text-sm text-muted-foreground">
          Your Balance
        </p>
        
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {formatBalance(data.balance)}
          </h2>
          
          <div className="flex items-center gap-4">
            {/* Up Percentage */}
            {data.upPercentage && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
                <span className="text-sm text-success font-medium">
                  {data.upPercentage.toFixed(2)}%
                </span>
              </div>
            )}
            
            {/* Down Percentage */}
            {data.downPercentage && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-destructive" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
                <span className="text-sm text-destructive font-medium">
                  {data.downPercentage.toFixed(2)}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-grays-3 rounded-full"></div>

      <div className="flex justify-between">
        <div className='space-y-[8px]'>
          <p className="text-sm text-muted-foreground">
            Currency
          </p>
          <p className="text-sm font-medium text-foreground">
            {data.currency} / {data.currencyName}
          </p>
        </div>

        <div className='space-y-[8px]'>
          <p className="text-sm text-muted-foreground">
            Status
          </p>
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${
              data.status.toLowerCase() === 'active' 
                ? 'bg-success' 
                : 'bg-muted-foreground'
            }`}></div>
            <p className="text-sm font-medium text-foreground">
              {data.status}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
} 