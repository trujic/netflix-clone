import { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Nav.css'

const Nav = () => {
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  }

  return(
    <nav>
      <div className="left__nav">
        <img className="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New & Popular</a></li>
          <li><a href="#">My List</a></li>
        </ul>
      </div>
      <div className="right__nav">
        <SearchIcon onClick={handleShowSearch}/>
        {showSearch ? <input className="search" type="text" placeholder="Titles, people, genres" value={search} onChange={handleSearchInput} /> : <></>}
        <a href="#">KIDS</a>
        <CardGiftcardIcon />
        <NotificationsIcon />
        <img className="acc__image" src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png" />
      </div>
    </nav>
  )
}

export default Nav
