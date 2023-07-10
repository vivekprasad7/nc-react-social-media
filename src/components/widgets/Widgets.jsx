import React from 'react'
import "./Widgets.css"
import { Suggested } from '../suggested/Suggested'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchModal } from '../search-modal/SearchModal'

export const Widgets = () => {
    const [searchInput, setSearchInput] = useState();
    const [showSearchModal, setShowSearchModal] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='widgets'>
            {
                    showSearchModal && (
                        <SearchModal
                        searchInput={searchInput}
                        showSearchModal={showSearchModal}
                        setShowSearchModal={setShowSearchModal}
                        />
                    )
                }
                     

            <div   onClick={() => setShowSearchModal(true)} className='widgets_input'>
           
               
            <i class="fa-solid fa-magnifying-glass widgets_searchIcon"></i>
                
                <input 
                placeholder='Search Users' 
                type='search' 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                />

            </div>

            <Suggested/>

        </div>
    )
}
