import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'

    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    

         constructor() {
            super();
            this.state = {
                articles:[],
                page:1,
                loading:true


            }
        }

        async componentDidMount(){

            let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=940d30ffd4f14917a9c148569390ed46&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false});
        }


        handleNext= async ()=>{
            if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

            }
           else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=940d30ffd4f14917a9c148569390ed46&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            

            this.setState({
                articles: parsedData.articles,

                page:this.state.page+1,
                loading:false
            })
        }


        }

        handlePrevious= async  ()=>{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=940d30ffd4f14917a9c148569390ed46&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();
            

            this.setState({
                articles: parsedData.articles,

                page:this.state.page-1,
                loading:false
            })


            
        }
    

    
    render() {
        

        
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{margin:'35px 0px',marginTop:'66px'}}>NewsIndia-Top {this.props.category} Headlines</h2>
              {this.state.loading &&   <Spinner/>}
                <div className="row">
                { !this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url} style={{padding: '10px'}}>
                     <Newsitem description={element.description} title={element.title} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/> 
                     </div>
                     


                })}
                </div>

                
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevious}>Previous</button>
                <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNext}>Next</button>


                </div>
            
                    
              
            </div>
        )
    }
}

export default News
