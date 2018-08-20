import React, { Component } from 'react'
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';

import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css';


class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      file: '',
      filename: '',
      filetype: '',
      img: '',
    };

    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }

  componentDidMount() {
    axios.get('/api/images').then(res => {
      this.setState({images: res.data});
    })
  }
  
    // this is the event handler for the file input field
  handlePhoto(event) {
    // this makes a generic file reader that an convert files into strings that allows us to upload it to a server.
    const reader = new FileReader();
    // the file itself is located here
    const file = event.target.files[0];
    // this is an event handeler and will not actaully run untill the code on line 39 finishes running
    reader.onload = photo => {
      // the photo param here is the processed image from the reader.
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type,
        img: '',
      });
    };
    // take the file from the input field and process it at a DataURL (a special way to interpret files)
    reader.readAsDataURL(file);
  }

  addImageToDB(url) {
    axios.post('/api/image', {image_url: url})
      .then(() => this.componentDidMount())
  }

  // when clicked it upload
  sendPhoto(event) {
    return axios.post('/api/s3', this.state).then(response => {
      this.addImageToDB(response.data.Location);
    });

  }

  render() {
    // console.log(this.props.user);
    const images = this.state.images.map((image) => {
      return {
        original: `${image.image_url}`,
        thumbnail: `${image.image_url}`
      }
    })
    return (
      <div className='gallery__container'>
        {this.props.user.permissions === 'admin' 
          ? <div style={{background: '#222', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          // style={{height: '10vh', marginTop: '5vh', backgroundColor: '#222', display: 'block', bottom: '0'}}
          >
            <input type='file' id='real' onChange={this.handlePhoto}/>
            <button onClick={this.sendPhoto}>upload</button>  
          </div>
          : <div></div>}
        <div className='gallery__carousel-container'>
          <ImageGallery items={images}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Gallery);
