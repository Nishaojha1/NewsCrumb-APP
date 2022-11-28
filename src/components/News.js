import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }
 PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsCrumb`;
  }
  
  async updateNews(){
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c64745efc67492f8212eeb3a38b5d4a&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    // console.log(data);
    let parsedData = await data.json(); //its a promise that the data could be parsed into json or converted into text..
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults}); 
  }
  async componentDidMount() {
    // async function can wait for a promise to resolve
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c64745efc67492f8212eeb3a38b5d4a&page=1&pageSize=${this.props.pageSize}`;

    // let data = await fetch(url);
    // // console.log(data);
    // let parsedData = await data.json(); //its a promise that the data could be parsed into json or converted into text..
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults}); 
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c64745efc67492f8212eeb3a38b5d4a&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;

    // this.setState({loading: true});

    // let data = await fetch(url);
    // // console.log(data);
    // let parsedData = await data.json(); //its a promise that the data could be parsed into json or converted into text..

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({page: this.state.page - 1});
    this.updateNews()
  };

  handleNextClick = async () => {
    // if(!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
  
    // }
    // else{
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c64745efc67492f8212eeb3a38b5d4a&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
      
    //   this.setState({loading: true});

    //   let data = await fetch(url);
    //   // console.log(data);
    //   let parsedData = await data.json(); //its a promise that the data could be parsed into json or converted into text..
      
      
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews()


  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsCrumb - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading &&<Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} 
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-3 px-4"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark mx-3 px-4"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;