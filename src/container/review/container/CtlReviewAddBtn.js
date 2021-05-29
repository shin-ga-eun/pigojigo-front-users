import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Axios, { post } from "axios";

export default class CtlReviewAddBtn extends Component {

    state={
        
        reviewCn: '', 
        singleLineEval: '', 
        applcntEmail:'sge7102',

        file: null,
    }

    // 버튼클릭시
    handleClickOpen= () => {
        this.setState({
            open: true, // Dialog 창을 열어준다
        });
    }

    handleClose= () => {
        this.setState({
            open: false, // Dialog 텍스트를 초기화 하고 닫아준다
        });
    }

    handleValueChange = (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFileInput = (e) => {
        this.setState({
            file: e.target.files[0],
        });
    }

    createReview() {
        const url = "/review/save";
  
        const formData = new FormData();
        const { reviewCn, singleLineEval, applcntEmail } = this.state;
  
        formData.append("file", this.state.file);
  
        const config = {
            headers: {
                "Content-type": "multipart/form-data",
            },
        };
  
        const json = `{ "reviewCn": "${reviewCn}", "singleLineEval": "${singleLineEval}", "applcntEmail": "${applcntEmail}"}`;
        console.log(json);
  
        formData.append("json", json);
        return post(url, formData, config);
    }

    handleFormSubmit = (e) => {

        this.createReview()
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log(error);
            });

       // this.handleClose();
    }

    render() {
        return (
            <div>
                <Button
                  variant="contained"
                  color="black"
                  onClick={this.handleClickOpen}
                  style={{
                      paddingLeft: 15, paddingRight: 15, fontSize: 17, margin: 15,
                  }}
                 >
                리뷰 쓰러가기
                </Button>

              <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <DialogTitle>리뷰작성</DialogTitle>

                  <form onSubmit={this.handleFormSubmit}>
                      <DialogContent>
                        사진을 등록해주세요 .. <br />
                          <input type="file" name="file" file={this.state.file} onChange={e => this.handleFileInput(e)} /><br />

                      </DialogContent>
                      <DialogContent>

                          <TextField
                              style={{ marginBottom: 15 }}
                              variant="outlined"
                              autoFocus
                              fullWidth
                              helperText="한줄평을 작성하세요.."
                              label="한줄평"
                              type="text"
                              name="singleLineEval"
                              value={this.state.singleLineEval}
                              onChange={this.handleValueChange}
                          /><br />

                          <TextField
                              style={{ marginBottom: 15 }}
                              fullWidth
                              label="내용"
                              rows="6"
                              multiline
                              margin="normal"
                              variant="filled"
                              name="reviewCn"
                              value={this.state.reviewCn}
                              helperText="리뷰 내용을 작성하세요.."
                              onChange={this.handleValueChange}
                          /><br />
                      </DialogContent>

                      <DialogActions>
                        <Button type="submit" variant="contained" color="secondary" onClick={this.handleFormSubmit && this.handleClose}>작성완료</Button>
                        <Button variant="outlined" color="grey" onClick={this.handleClose}>닫기</Button>
                      </DialogActions>
                  </form>
              </Dialog>
            </div>
        )
    }
}
