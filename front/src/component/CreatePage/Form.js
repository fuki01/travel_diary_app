import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Box, Input, Button, Grid } from '@material-ui/core';
import Image from 'react-image-resizer';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

class Form extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      imageData: null,
      title:     null,
      context:   null
    }
    this.fileInput = React.createRef()
    this.handleTitleChange   = this.handleTitleChange.bind(this);
    this.handleContextChange = this.handleContextChange.bind(this);
    this.handleSubmit        = this.handleSubmit.bind(this);
  }


  //title
  handleTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

    //context
  handleContextChange(e){
    this.setState({
      context: e.target.value
    })
  }
  
  
  //file
  onFileChange(e){
    const files = e.target.files
    if(files.length > 0){
      var file   = files[0]
      var render = new FileReader()
      render.onload = (e) => {
        this.setState({ imageData: e.target.result })
      };
      render.readAsDataURL(file)
    }else{
      this.setState({ imageData: null })
    }
  }

  resetInput() {
    this.fileInput.current.value = ''
    this.setState({ imageData: null })
  }

  //submit
  handleSubmit(e){
    alert('submit image:' + this.state.imageData + ' title:' + this.state.title + ' context:' + this.state.context);
    e.preventDefault();
  }

  render(){
    const imageData = this.state.imageData
    let preview = ''
    let resetButton = ''
    if(imageData != null){
      preview = (
        <div>
          <Image src={imageData} height={300} width={300} style={style} />
        </div>
      )
      resetButton = (
        <div>
          <button 
            type="button"
            onClick={this.resetInput.bind(this)}
          >
            リセットする
          </button>
        </div>
      )
    }
    return(
      <>
      <form onSubmit={this.handleSubmit}>

      <Box m={4}>
        <TextField
          id="standard-required"
          label="タイトル"
          value={this.state.title}
          onChange={this.handleTitleChange}
          style={{width:400}}
        />
      </Box>
      <Box m={4}>
        画像:
        {preview}
        {resetButton}
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => { this.onFileChange(e)}}
          ref={this.fileInput}
          style={{width:300, marginLeft:60}}
        />
      </Box>
      <Box m={4}>
        <TextField
          id="outlined-multiline-static"
          label="内容"
          multiline rows={10}
          value={this.state.context}
          onChange={this.handleContextChange}
          style={{width:400}}
          variant="outlined"
        />
      </Box>
      <Box m={4}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleSubmit}
          value={"投稿"}
        >
          投稿
        </Button>
      </Grid>
      </Box>
      </form>
      </>
    );
  }
}

export default Form;