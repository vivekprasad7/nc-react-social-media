import React from 'react'
import "./Widgets.css"
import { Suggested } from '../suggested/Suggested'

export const Widgets = () => {
    return (
        <div className='widgets'>
                     

            <div className='widgets_input'>
            <i class="fa-solid fa-magnifying-glass widgets_searchIcon"></i>
                
                <input placeholder='Search Twitter' type='text' />

            </div>

            <Suggested/>

        </div>
    )
}
