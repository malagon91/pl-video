import React from 'react'
import Category from './category';
import './categories.css';

class Categories extends React.Component{
    render(){
        console.log(this.props.data.categories);
        const categories = this.props.data.categories;
        return(
        <div className="Categories">
            {
                categories.map((item) => {
                  return  <Category key={item.id} {...item}/>
                })
            }

        </div>
        )
    }
}


export default Categories;