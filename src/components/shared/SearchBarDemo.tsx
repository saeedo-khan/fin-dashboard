'use client';

import SearchBar from './SearchBar';

export default function SearchBarDemo() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Here you would typically filter your data or make an API call
  };

  return (
    <div>
        <SearchBar 
            placeholder="Search anything on Transactions" 
            onSearch={handleSearch}
            className="max-w-full"
        />
    </div>
  );
} 