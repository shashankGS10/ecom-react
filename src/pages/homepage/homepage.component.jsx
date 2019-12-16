import React from 'react'
import './homepage.style.scss';
import Directory from '../../components/directory-menu/directory-menu.component'

export default function HomePage({ history }) {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}
