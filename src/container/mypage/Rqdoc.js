import React, { Component } from 'react'
import { Table, Segment, Button } from 'semantic-ui-react'
import CtlPayBtn from './CtlPayBtn'

export default class Rqdoc extends Component {

    render() {

        const {rqdocs} = this.props

        return (
          <div>
            <Segment style={{ padding: "1em 10em" }} vertical>
              <Table celled fixed style={{ margin: 30 }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>신청번호</Table.HeaderCell>
                    <Table.HeaderCell>신청일</Table.HeaderCell>
                    <Table.HeaderCell>꽃 사이즈</Table.HeaderCell>
                    <Table.HeaderCell>꽃 수령주기</Table.HeaderCell>
                    <Table.HeaderCell>꽃 구독 기간</Table.HeaderCell>
                    <Table.HeaderCell>꽃 결제방법</Table.HeaderCell>
                    <Table.HeaderCell>꽃병 신청 여부</Table.HeaderCell>
                    <Table.HeaderCell>잔여횟수 / 전체횟수</Table.HeaderCell>
                    <Table.HeaderCell>신청서 상태</Table.HeaderCell>
                    <Table.HeaderCell>결제 여부</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {rqdocs && (
                  <Table.Body>
                    {rqdocs.map((c) => (
                      <Table.Row>
                        <Table.Cell>{c.rqdocSn}</Table.Cell>
                        <Table.Cell>{c.reqDtm}</Table.Cell>
                        <Table.Cell>{c.sizeCd}</Table.Cell>
                        <Table.Cell >{c.pickUpCycleCd}</Table.Cell>
                        <Table.Cell>{c.paymentCycleCd}</Table.Cell>
                        <Table.Cell>{c.paymentMthCd}</Table.Cell>
                        <Table.Cell>{c.vaseYn}</Table.Cell>
                        <Table.Cell>{c.remainCnt} / {c.totalCnt} </Table.Cell>
                        <Table.Cell>{c.progrsCd}</Table.Cell>
                        <Table.Cell>
                          {c.progrsCd !== "신청" && c.remainCnt !== 0 && c.progrsCd + ("(구독중)")}
                          {c.progrsCd !== "신청" && c.remainCnt === 0 && c.progrsCd}
                          
                          {c.progrsCd === "신청" && <CtlPayBtn sid = {c.sid} totalPrice ={c.price} remainPrice={c.remainPrice} oncePrice={c.oncePrice}/>}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                )}
              </Table>
            </Segment>
          </div>
        );
    }
}
