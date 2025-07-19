'use client';

import InvoiceCard from './InvoiceCard';

const invoiceData = {
  invoiceNumber: 'MAG 2541420',
  issuedDate: '2022-04-10',
  dueDate: '2022-04-20',
  billedTo: {
    name: 'Sajib Rahman',
    addressLine1: '3471 Rainy Day Drive',
    addressLine2: 'Needham, MA 02192',
  },
};

export default function InvoiceCardDemo() {
  return (
    <div>
      <InvoiceCard data={invoiceData} />
    </div>
  );
} 