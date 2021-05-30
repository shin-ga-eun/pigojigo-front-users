import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Checkbox, Paper, DialogContentText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Grid, Radio } from "semantic-ui-react";
import Axios from "axios";

export default class CtlPayBtn extends Component {
  state = {
    sid: this.props.sid,
    totalPrice: this.props.totalPrice,
    remainPrice: this.props.remainPrice,
    oncePrice: this.props.oncePrice,

    open: false,
  };

  handleClickOpen = (e) => {
    console.log(this.state.id);
    this.setState({
      open: true,
    });
  };

  handleValueChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { sid } = this.state;

    try {
      const response = await Axios.post("subscription/pay", {
        sid,
      });
      console.log(response);

      // refresh this page
      window.location.reload();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handlePaymentMthCd = (e, { value }) => {
    this.setState({ paymentMthCd: value });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          결제하기
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>결제창</DialogTitle>
          <DialogContent>결제를 진행하시겠습니까?</DialogContent>
          <DialogContent>
            <Grid textAlign="left">
              <Grid.Row style={{ marginLeft: 10, marginBottom: 10 }}>
                <Radio
                  label="무통장입금"
                  name="radioGroup"
                  value="PmMthCd1"
                  defaultChecked
                  //checked={this.state.paymetMthCd === 'PmMthCd1'}
                  onChange={this.handlePaymentMthCd}
                />
              </Grid.Row>

              <Grid.Row style={{ marginLeft: 10, marginBottom: 10 }}>
                <Radio
                  label="신용/체크카드결제"
                  name="radioGroup"
                  value="PmMthCd2"
                  disabled
                  checked={this.state.paymetMthCd === "PmMthCd2"}
                  onChange={this.handlePaymentMthCd}
                />
              </Grid.Row>

              <Grid.Row style={{ marginLeft: 10 }}>
                <Radio
                  label="페이결제"
                  name="radioGroup"
                  value="PmMthCd3"
                  disabled
                  checked={this.state.paymetMthCd === "PmMthCd3"}
                  onChange={this.handlePaymentMthCd}
                />
              </Grid.Row>
            </Grid>
          </DialogContent>
    
          <DialogContent textAlign='center'>총 결제금액</DialogContent>
          <DialogContent textAlign='center'><b>{this.state.totalPrice}</b></DialogContent>
          
          
          <DialogContent textAlign='center'>이번 달 결제 금액</DialogContent>
          <DialogContent textAlign='center'><b style={{ color: '#0000FF'}}>{this.state.oncePrice}</b></DialogContent>

          <DialogContent textAlign='center'>결제 후 잔여금액</DialogContent>
          <DialogContent textAlign='center'><b>{this.state.remainPrice}</b></DialogContent>

          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              결제하기
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
