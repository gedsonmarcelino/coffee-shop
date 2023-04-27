import React from 'react';
import { IconSearch, SearchContent, SearchInput } from './styles';
import SearchIcon from '../../assets/images/icon-search.png';

export function Searcher() {
  return (<SearchContent>
    <IconSearch source={SearchIcon} />
    <SearchInput placeholder='Browse your favorite coffee...' />
  </SearchContent>);
}
