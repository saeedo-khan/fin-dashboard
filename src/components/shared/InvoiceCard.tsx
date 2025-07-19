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
    <div className="bg-card rounded-lg border border-border p-6 w-[375px]">
      <div className="flex justify-between">
        {/* Left Section - Invoice Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Invoice Number
            </h3>
            <p className="text-sm text-muted-foreground">
              {data.invoiceNumber}
            </p>
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground">
                Issued Date: {formatDate(data.issuedDate)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Due Date: {formatDate(data.dueDate)}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Billed To Details */}
        <div className="text-right space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Billed to
            </h3>
            <div className="space-y-1">
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
    </div>
  );
} 