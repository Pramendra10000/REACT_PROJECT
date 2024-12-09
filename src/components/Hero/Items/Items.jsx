import React from 'react'

 const Items = () => {
  return (
    <div className='item'>
        <img src={this.props.image} alt=""/>
        <p>{this.props.name}</p>
        <div className='item-price'>
            <div className='item-price-new'>
                {this.prop.new_price}
            </div>
            <div className='item-price-old'>
                {this.prop.old_price}
                </div>
        </div>
    </div>
  )
}


export default Items;