import React from 'react'
import { BaseAction } from '../types/actionTypes';

const searchTypes = ['movie', 'tv-show', 'person'];

type SearchBarProps = {
    searchValue: string,
    searchType: string,
    onSearchValueChange: (value: string) => BaseAction,
    onSearchTypeChange: (type: string) => BaseAction
}

export const SearchBar = (props: SearchBarProps) => {
    let searchTimeout: ReturnType<typeof setTimeout>;

    const onTypeChange = (e: React.FormEvent<HTMLSelectElement>) => {
        props.onSearchTypeChange(e.currentTarget.value);
    }

    const onValueChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.persist();
        const value = e.currentTarget.value;
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        searchTimeout = setTimeout(() => {
            props.onSearchValueChange(value)
        }, 500);
    }

    return (
        <div>
            <select value={props.searchType} onChange={onTypeChange}>
                {searchTypes.map((type) => <option value={type} key={type}>{type}</option>)}
            </select>
            <input type="text" name="searchValue" onChange={onValueChange} />
        </div>
    )
}
