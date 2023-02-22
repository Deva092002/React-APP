import React, { Component } from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent:'center', position:'absolute', right:'0'}}> 

        <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          </div>
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2020/09/TATA-ELXSI-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{!title?<b>"Title Unknown"</b>:title}</h5>
            <p className="card-text">{!description?<b>"Description Unknown"</b>:description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more...</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
