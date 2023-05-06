import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
  const [article, setArticle]=useState([]);
  const [page, setPage]=useState(1);
  const [totalResults, setTotalResults]=useState(0);
  const [loading, setLoading]=useState(false);
  
 useEffect( ()=>(async()=>{                    //code in componentDidmount 
  props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsdata = await data.json();            // need to convert to readable data
    setArticle(parsdata.articles);
    setTotalResults(parsdata.totalResults);
    setLoading(false);
    props.setProgress(100);

 }), []);

//  const firstRender=async()=>{                       //code in componentDidmount 
//   props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     let parsdata = await data.json();            // need to convert to readable data
//     setArticle(parsdata.articles);
//     setTotalResults(parsdata.totalResults);
//     setLoading(false);
//     props.setProgress(100);

//  }



  const fetchMoreData = async () => {
 
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsdata = await data.json();            // need to convert to readable data
    setArticle(article.concat(parsdata.articles));
    setTotalResults(parsdata.totalResults);
    setLoading(false);
    setPage(page+1);
  };


    return (
      <>


        <h1 className='text-center' style={{ marginTop: "70px"}}>Monkey- HeadLines</h1>
        {loading?<Spinner/>:null}
        
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {article.map((element) =>
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem title={element.title} description={element.description ? element.description : ""} imageURL={element.urlToImage ? element.urlToImage : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                </div>)}
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News