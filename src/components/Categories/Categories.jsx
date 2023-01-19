import React from 'react'
import { Link } from 'react-router-dom'
import "./categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
    <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''></img>
            <button>
                <Link className='link' to="products/2">Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=''></img>
            <button>
                <Link className='link' to="products/1">Women</Link>
            </button>
        </div>
    </div>
    <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''></img>
            <button>
                <Link className='link' to="products/1">Popular</Link>
            </button>
        </div>
    </div>
    <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=''></img>
            <button>
                <Link className='link' to="products/1">New</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/3778704/pexels-photo-3778704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''></img>
            <button>
                <Link className='link' to="products/1">Accessories</Link>
            </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''></img>
            <button>
                <Link className='link' to="products/1">Shoes</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Categories