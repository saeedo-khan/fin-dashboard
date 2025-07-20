'use client';

import { useTheme } from '@/components/ThemeProvider';

interface InvoiceData {
  invoiceNumber: string;
  issuedDate: string;
  dueDate: string;
  billedTo: {
    name: string;
    addressLine1: string;
    addressLine2: string;
  };
}

interface InvoiceCardProps {
  data: InvoiceData;
}

export default function InvoiceCard({ data }: InvoiceCardProps) {
  const { theme } = useTheme();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-5 max-w-[675px] w-full h-[153px]">
      <div className='flex justify-between'>
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Invoice Number
            </h3>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              {data.invoiceNumber}
            </p>
              <p className="text-sm text-muted-foreground">
                Issued Date: {formatDate(data.issuedDate)}
              </p>
              <p className="text-sm text-muted-foreground">
                Due Date: {formatDate(data.dueDate)}
              </p>
          </div>
        </div>

        <div className="text-right space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Billed to
              </h3>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {data.billedTo.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {data.billedTo.addressLine1}
              </p>
              <p className="text-sm text-muted-foreground">
                {data.billedTo.addressLine2}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
} 