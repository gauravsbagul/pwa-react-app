import React from 'react'

export const Input=({ setSearch }) => {

    return (
        <div className="coin-search">
            <h1 className="coin-text">Search a currency</h1>
            <form>
                <input
                    type="text"
                    placeholder="search"
                    className="coin-input"
                    onChange={ (e) => setSearch(e.target.value) }
                />
            </form>
        </div>
    )
}