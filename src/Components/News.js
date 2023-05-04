import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      totalResults: 0,
      loading: false
    }

  }


  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f50aeb6b5c4c9eab468770e18afc9c&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsdata = await data.json();            // need to convert to readable data
    this.setState({ article: parsdata.articles, totalResults: parsdata.totalResults, loading: false });
    this.props.setProgress(100);
  }

  // async updateNews() {
    
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f50aeb6b5c4c9eab468770e18afc9c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true })
  //   let data = await fetch(url);
  //   let parsdata = await data.json();            // need to convert to readable data
  //   this.setState({ article: parsdata.articles, totalResults: parsdata.totalResults, loading: false });
  // }

  fetchMoreData = async () => {
     //this.setState({ page: this.state.page + 1 }); 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f50aeb6b5c4c9eab468770e18afc9c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsdata = await data.json();            // need to convert to readable data
    this.setState({ article: this.state.article.concat(parsdata.articles), totalResults: parsdata.totalResults, loading: false, page: this.state.page + 1 });
  };


  // handlePrebtn = async () => {

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f50aeb6b5c4c9eab468770e18afc9c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsdata = await data.json();
  //   // this.setState({ article: parsdata.articles, page: this.state.page - 1, loading:false });
  //   this.setState({ page: this.state.page - 1 }, () => { this.updateNews(); })


  // }

  // handleNextbtn = async () => {

  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f50aeb6b5c4c9eab468770e18afc9c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   //   this.setState({loading:true})
  //   //   let data = await fetch(url);
  //   //   let parsdata = await data.json();
  //   // this.setState({ article: parsdata.articles, page: this.state.page + 1, loading:false });

  //   //await this.setState({ page: this.state.page + 1})      ---> alternative of below line
  //   this.setState({ page: this.state.page + 1 }, () => { this.updateNews(); })

  // }

  render() {

    return (
      <>

        {/* {this.state.loading?<Spinner/>:" put whole code below here"} */}

        <h1 className='text-center'>Monkey- HeadLines</h1>
        
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.article.map((element) =>
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem title={element.title} description={element.description ? element.description : ""} imageURL={element.urlToImage ? element.urlToImage : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"} url={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                </div>)}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page == 1} class="btn btn-dark" onClick={this.handlePrebtn}>Previous</button>
            <button type="button" disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} class="btn btn-dark" onClick={this.handleNextbtn}>Next</button>
          </div> */}

      </>
    )
  }
}

export default News