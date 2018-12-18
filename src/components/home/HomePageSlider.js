import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./HomePageSlider.css"


class HomePageSlider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      padding: this.getPadding(),
      slides: [{
          "type":"CAROL SERVICE",
          "title":"The real reason for the season",
          "subtitle": "Sunday 23rd December - 6.30pm (D.V.)",
          "imageUrl":"img/slides/christmas.png",
          "url":"/media/SBC_Christmas_Invite_18_Web.pdf",
          "buttonText": "More Info",
          "backgroundPosition":"center"
        },{
          "type":"SUNDAY SERIES",
          "title":"Against The Grain",
          "subtitle": "A study from Daniel",
          "url":"/sermons/series/Against%20The%20Grain",
          "imageUrl":"img/slides/daniel.jpg",
          "internalLink":true
        },{
          "type":"BIBLE STUDY SERIES",
          "title":"WHAT IS A BIBLICAL BAPTIST?",
          "url":"/sermons/series/What%20is%20a%20Biblical%20Baptist%3F",
          "imageUrl":"img/slides/baptist.jpg",
          "internalLink":true
        },{
          "type":"GOSPEL SERIES",
          "title":"WHERE DID IT ALL GO WRONG?",
          "url":"/sermons/series/Where%20did%20it%20all%20go%20wrong%3F",
          "imageUrl":"img/slides/gowrong.jpg",
          "internalLink":true
        },{
          "type":"CELEBRATING",
          "title":"THIRTY YEARS",
          "subtitle":"of God's Faithfulness",
          "imageUrl":"img/slides/anniversary.png",
          "subsubtitle":"1988 - 2018"
        }
      ]
    }
  }

  getPadding = () => {
    if($(window).width() > 700) {
      return ($(window).width() - 700) / 2
    } else {
      return 0;
    }
  }

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding()
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding+'px',
      slidesToShow: 1,
      autoplay:true,
      arrows:false,
      autoplaySpeed:5000,
      dots:true
    };

    const slides = this.state.slides.map((slide,index)=>{
      return(
        <div key={index}>
          <HomePageSlide {...slide}/>
        </div>
      )
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
