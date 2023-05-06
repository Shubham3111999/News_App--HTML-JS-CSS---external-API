import React from 'react'

 const NewsItem = (props)=> {

    let { title, description, imageURL, url, author, publishedAt, source } = props;

    return (
      <div>
        <div className="card" >
          <div style={{
          display: "flex",
          justifyContent: "flex - end",
          position: "absolute",
          right: "0"}} ><span class="translate-middle badge rounded-pill bg-danger">{source}</span>
          
          </div>
          <img className="card-img-top" src={imageURL} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <div class="text-muted">
              by {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}
            </div>
            <a href={url} target='_blank' className="btn btn-sm btn-primary btn-dark my-3">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
