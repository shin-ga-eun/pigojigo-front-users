import React from 'react'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Icon, Grid} from 'semantic-ui-react';
import {Card, CardMedia} from '@material-ui/core';

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

  function convertReviewCn(data){

    var res = data;
    res = String(res).substring(0, 30);
    res += '...';
    return res;
  }

  function makeAgeRange(data){

    var res = data;
    if(String(res).length > 1){
      res = String(res).substring(0,1);
      res += '0대'
    } else {
      res = '10대 미만'
    }
    return res;
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell width="3px">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center" width="90px">{row.subCnt} 회 구독</TableCell>
          <TableCell align="left" width="80px">{row.nickname}</TableCell>
          <TableCell align="center" width="80px">{makeAgeRange(row.birth)}</TableCell>
          <TableCell align="center" width="50px">{row.sex}</TableCell>
          <TableCell 
            align="left" 
            width='300px'
            textOverflow='ellipsis'
            overflow='hidden'
            whiteSpace='nowrap'>
                {row.singleLineEval}
          </TableCell>
          <TableCell align="center" width="180px">{row. reqDtm}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>

              <Grid columns={2} textAlign='left' relaxed='very'>
                  <Grid.Column >
                    <Card>
                       <img alt="고객 리뷰사진" src={row.imgUrl} style={{width: 250, height: 300}}/>
                    </Card>
                  </Grid.Column>
                  <Grid.Column style={{marginTop: '5px', marginBottom: '10px'}}>
                  <h4>한줄 평가</h4>
                    {row.singleLineEval}
                    <h4>고객 후기</h4>
                    {row.reviewCn}
                    
                  </Grid.Column>
              </Grid>
          
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      nickname: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      subCnt: PropTypes.number.isRequired,
      reviewCn: PropTypes.string.isRequired,
      reiewImg: PropTypes.string.isRequired,
      regDate: PropTypes.string.isRequired,
      singleLineEval: PropTypes.string.isRequired,
    }).isRequired,
  };

export default function ReviewTable(props) {

  const reviews = props.reviews

  return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableBody>
                {reviews && reviews.map((row) => (
                    
                    <Row key={row.name} row={row} />
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );        
}
