import React from 'react'
import Nrc from '../../assets/nrc.avif'
import Save from '../../assets/save.avif'
import Person from '../../assets/person.webp'
import Future from '../../assets/future.webp'
import Effective from '../../assets/effective.avif'
import Lady from '../../assets/lady.avif'

import './features.css'

const Features = () => {
  return (
    <div className='features'>
        <div className='we'>
            <h3>We've been featured</h3>
        </div>
        <div className='feature-div'>
            <img src={Nrc} alt=""/>
            <img src={Save} alt="" className='feature-img'/>
            <img src={Person} alt=""className='feature-img' />
            <img src={Future} alt="" className='feature-img'/>
            <img src={Effective} alt=""/>
        </div>
        <div className='feature-sec'>
            <div>
              <img src={Lady} alt=""  className='lady'/>
            </div>
            <div className='feature-other'>
                 <h3>Second-hand jeans at the perfect price</h3> 
                 <p>All our jeans prices drop every few hours - here's how it works:</p>
                 <br />
                 <p>1 - Find you perfect pair(s)</p>
                 <p>2 - Check the price and countdown timer</p>
                 <p>3 - Buy -or- wait for the price drop</p>
                 <br />
                 <p>Wait too long and someone else will snatch your jeans...</p>
                 <br />
                 <button>Get discounted Prices</button>
            </div>
        </div>
        <div className='baby-sec'>
            <div className='one'>
                <h4>SHOP WOMEN</h4>
                <p>Discounted vintage's lev & more</p>
            </div>
            <div className='two'>
                <h4>SHOP MEN</h4>
                <p>Discounted vintage's lev & more</p>
            </div>
            <div className='three'>
                <h4>SHOP KIDS</h4>
                <p>3-16years</p>
            </div>
            <div className='four'>
                <h4>SHOP BABY</h4>
                <p>0-3years</p>
            </div>
        </div>
        <div className='children'>
            <div>
                <h2>For the little ones </h2>
            </div>
            <div className='child-div'>
                <div className='child'>
                    <h4>Best sellers</h4>
                </div>
                <div className='child-1'>
                    <h4>nursery</h4>
                </div>
                <div className='child-2'>
                    <h4>newborn</h4>
                </div>
                <div className='child-3'>
                    <h4>all sustainable</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features