import React from 'react'
import './ExploreMenu.css'
import bk1 from '../../assets/images/bk1.jpg'
import bk2 from '../../assets/images/bk2.jpg'
import bk3 from '../../assets/images/bk3.jpg'
import bk4 from '../../assets/images/bk4.jpg'
import bk5 from '../../assets/images/bk5.jpg'
import bk6 from '../../assets/images/bk6.jpg'
import bk7 from '../../assets/images/bk7.jpg'
import bk8 from '../../assets/images/bk8.jpg'
import bk9 from '../../assets/images/bk9.jpg'
import bk10 from '../../assets/images/bk10.jpg'
import bk11 from '../../assets/images/bk11.jpg'
import bk12 from '../../assets/images/bk12.jpg'
import bk13 from '../../assets/images/bk13.jpg'
import bk14 from '../../assets/images/bk14.jpg'
import bk15 from '../../assets/images/bk15.jpg'
import bk16 from '../../assets/images/bk16.jpg'

const menuItems = [
  { src: bk1, alt: 'Earl Gray Tea', name: 'Earl Gray Tea' },
  { src: bk2, alt: 'Green Tea', name: 'Green Tea' },
  { src: bk3, alt: 'Black Tea', name: 'Black Tea' },
  { src: bk4, alt: 'Oolong Tea', name: 'Oolong Tea' },
  { src: bk5, alt: 'White Tea', name: 'White Tea' },
  { src: bk6, alt: 'Herbal Tea', name: 'Herbal Tea' },
  { src: bk7, alt: 'Chai Tea', name: 'Chai Tea' },
  { src: bk8, alt: 'Matcha Tea', name: 'Matcha Tea' },
  { src: bk9, alt: 'Rooibos Tea', name: 'Rooibos Tea' },
  { src: bk10, alt: 'Pu-erh Tea', name: 'Pu-erh Tea' },
  { src: bk11, alt: 'Mousse Xoài', name: 'Mousse Xoài' },
  { src: bk12, alt: 'Mousse Dưa Lưới', name: 'Mousse Dưa Lưới' },
  { src: bk13, alt: 'Mousse Dâu Tây', name: 'Mousse Dâu Tây' },
  { src: bk14, alt: 'Tiramisu', name: 'Tiramisu' },
  { src: bk15, alt: 'Mousse Nhãn', name: 'Mousse Nhãn' },
  { src: bk16, alt: 'Mousse BlueBerry', name: 'Mousse BlueBerry' }
]

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choosen from a diverse menu featuring a delectable array</p>
      <div className="explore-menu-list">
        {menuItems.map((item, index) => (
          <div key={index} className='explore-menu-list-item'>
            <p onClick={() => setCategory(prev => prev === item.name ? "All" : item.name)}>{item.name}</p>
            <img className={category === item.name ? "active" : ""} src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu