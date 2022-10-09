import React, { useState } from 'react';
import styles from './Search.module.scss'
import search from '../../images/search-black.svg'

const Search = ({ searchValue, setSearchValue, error }) => {
    const [input, setInput] = useState('Tashkent')
    const style = error === input ? styles['input red'] : styles['input']
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(input.trim())
    }
    return (

        <form onSubmit={handleSubmit} className={styles['thisForm']}>
            <div className={styles['search--holder']}>
                <input
                    type='text'
                    className={style}
                    placeholder='Поиск города'
                    value={input}
                    onChange={(event) => {
                        event.preventDefault()
                        setInput(event.target.value)
                    }}
                >
                </input><img src={search} className={styles['search--img']} onClick={handleSubmit} />
            </div>
            <input type='submit' hidden />
        </form>

    );
};

export default Search;