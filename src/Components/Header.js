import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Header=()=> {
    return (
    <nav>
        <h1>Where in the world</h1>
        <button>
            <DarkModeOutlinedIcon/>
            <span>Dark Mode</span>
        </button>
    </nav>
    )
}
export default Header