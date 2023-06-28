import React from 'react'
import "./Widgets.css"

export const Widgets = () => {
    return (
        <div className='widgets'>
                     

            <div className='widgets_input'>
            <i class="fa-solid fa-magnifying-glass widgets_searchIcon"></i>
                
                <input placeholder='Search Twitter' type='text' />

            </div>

        </div>
    )
}
