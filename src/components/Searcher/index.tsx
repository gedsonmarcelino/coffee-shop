import React from 'react';
import { IconSearch, SearchContent, SearchInput } from './styles';
import Icon from '../Icon';

export function Searcher({ value, onChangeText }) {
  return (<SearchContent>
    <IconSearch source={Icon['icon-search'].uri} />
    <SearchInput placeholder='Browse your favorite coffee...' value={value} onChangeText={onChangeText} />
  </SearchContent>);
}
