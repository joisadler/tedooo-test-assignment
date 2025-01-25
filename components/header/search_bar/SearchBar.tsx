import { useState } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import styles from './search_bar.module.scss';

type SearchBarProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <SearchIcon className={styles.search_icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearch}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
