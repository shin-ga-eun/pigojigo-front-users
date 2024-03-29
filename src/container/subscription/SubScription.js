import React, { Component } from 'react'
import { Divider, Icon, Form, Grid, Segment } from 'semantic-ui-react'
import { Modal, Button, Radio } from 'semantic-ui-react'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CtlSizeCd from './CtlSizeCd'
import CtlPickUpCycleCd from './CtlPickUpCycleCd';
import CtlPaymentCycleCd from './CtlPaymentCycleCd';
import CtlPaymetMthCd from './CtlPaymetMthCd';
import CtlVaseYn from './CtlVaseYn';
import sample from '/Users/sge/react-workspace/pigojigo/src/resources/flower/sample.png'

import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
}));

function getSteps() {
    return [ 
        <h3>꽃 사이즈를 선택해주세요.</h3>, 
        <h3>꽃 수령 주기를 선택해주세요.</h3>, 
        <h3>꽃 구독 기간을 선택해주세요.</h3>, 
        <h3>결제 방법을 선택해주세요.</h3>, 
        <h3>더 필요한 게 있으신가요?</h3>, 
    ];
}

function SubScription ({history}) {

    const classes = useStyles.bind();
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = React.useState(0);
    const steps = getSteps();

    const [sizeCd, setSizeCd] = React.useState('S');
    const [pickUpCycleCd, setPickUpCycleCd] = React.useState('1');
    const [paymentCycleCd, setPaymentCycleCd] = React.useState('1');
    const [paymentMthCd, setPaymentMthCd] = React.useState('PmMthCd1');
    const [vaseYn, setVaseYn] = React.useState('N');

    const getStepContent = (step) => {

        switch (step) {
            case 0:
                return <CtlSizeCd onData = {handleSizeCd} />;
            case 1:
                return <CtlPickUpCycleCd onData = {handlePickUpCycleCd}/>;
            case 2:
                return <CtlPaymentCycleCd onData = {handlePaymentCycleCd}/>;
            case 3:
                return <CtlPaymetMthCd onData = {handlePaymentMthCd}/>;
            case 4:
                return <CtlVaseYn onData = {handleVaseYn}/>;
            default:
                return 'Unknown step';
        }
      }

    const handleSizeCd = (data) => {
        setSizeCd(data);
    }
    const handlePickUpCycleCd = (data) => {
        setPickUpCycleCd(data);
    }
     const handlePaymentCycleCd = (data) => {
        setPaymentCycleCd(data);
    }
    const handlePaymentMthCd = (data) => {
        setPaymentMthCd(data);
    }
    const handleVaseYn = (data) => {
        setVaseYn(data);
    }

    const handleClickOpen= () => {
        handleReset();
        setOpen(true);
    }

    const handleClickClose= () => {
        setOpen(false);
    }

    const handleFormSubmit= async (e) => {
        e.preventDefault(); 

        try {
            const response = await Axios.post("/subscription/apply", {
                sizeCd, pickUpCycleCd , paymentCycleCd, paymentMthCd, vaseYn,
                applcntEmail : localStorage.getItem('email') }
                ,{
                headers: {
                    "Content-type":"application/json",
                }
            });

            const { status, data } = response;

            console.log(response);
            alert("구독이 신청 되었습니다.");

            handleClickClose();
            
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return (
        <div>
        <Button size='huge' onClick={handleClickOpen} style={{backgroundColor: '#2962FF', color: '#FFFFFF'}}>
            꽃 정기구독 신청하러가기
            <Icon name='right arrow' />
        </Button>
        <Modal    
            fullWidth
            open={open} 
            onClose={handleClickClose}> 
            <Modal.Header align='center'>                     
                지금 바로 꽃 구독 서비스를 신청해보세요 !
            </Modal.Header>
            <Modal.Content scrolling>
            <Segment>
            <Grid columns={1} relaxed='very'>
                <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                        <div>

                        <Button
                            style={{marginTop:5}}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                            이전 단계로
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? '완료' : '다음 단계로'}
                        </Button>
                        </div>
                        </div>
                        </StepContent>
                    </Step>
                ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography style={{ marginLeft: 20 }}> 
                        모든 항목을 기재하였습니다. 
                    </Typography>
                    </Paper>
                )}
                </div>
                </Grid>
                </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={handleReset} className={classes.button} style={{ marginLeft: 20 }}>
                        초기화하기
                    </Button>
                    
                    {activeStep !== steps.length && (<Button variant="outlined" disabled primary onClick={handleFormSubmit} > 신청하기 </Button>)}
                    {activeStep === steps.length && (<Button variant="outlined" primary onClick={handleFormSubmit} > 신청하기 </Button>)}
                    <Button variant="outlined" onClick={handleClickClose}>닫기</Button>
                </Modal.Actions>
                </Modal>
          </div>
        )
    }

export default SubScription;
