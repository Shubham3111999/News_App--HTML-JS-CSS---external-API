import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, url, author, publishedAt, source } = this.props;
    return (
      <div>
        

        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zI
      :"1"}}>{source}</span>
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
}

export default NewsItem
