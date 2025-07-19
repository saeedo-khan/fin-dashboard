'use client';

import ClientDetails from './ClientDetails';

const lightThemeClient = {
  name: 'Sajib Rahman',
  email: 'rahmansajib@uihut.com',
  company: 'UIHUT Agency LTD',
  address: '3461 Camel Back Road Tulsa, USA',
  isVerified: true,
  avatar: '/assets/images/avatar1.png',
};

export default function ClientDetailsDemo() {
  const handleAddCustomer = () => {
    console.log('Add Customer clicked');
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  return (
    <div>
      <ClientDetails
        client={lightThemeClient}
        onAddCustomer={handleAddCustomer}
        onMenuClick={handleMenuClick}
      />
    </div>
  );
} 