import React, { Component } from 'react'
import { Table, Segment } from 'semantic-ui-react'

export default class Rqdoc extends Component {

    render() {

        const {rqdocs} = this.props

        return (
            <div>
            <Segment style={{ padding: '1em 10em'}} vertical>
              <Table celled fixed style={{ margin: 30 }}>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>신청번호</Table.HeaderCell>
                    <Table.HeaderCell>신청일</Table.HeaderCell>
                    <Table.HeaderCell>꽃 사이즈</Table.HeaderCell>
                    <Table.HeaderCell>꽃 수령주기</Table.HeaderCell>
                    <Table.HeaderCell>꽃 결제주기</Table.HeaderCell>
                    <Table.HeaderCell>꽃 결제방법</Table.HeaderCell>
                    <Table.HeaderCell>꽃병 신청 여부</Table.HeaderCell>
                    <Table.HeaderCell>신청서 상태</Table.HeaderCell>                   
                </Table.Row>
                </Table.Header>
            {rqdocs &&
                <Table.Body>
                    {rqdocs.map(c => (
                    <Table.Row>
                        <Table.Cell>{c.rqdocSn}</Table.Cell>       
                        <Table.Cell>{c.reqDtm}</Table.Cell>
                        <Table.Cell>{c.sizeCd}</Table.Cell>
                        <Table.Cell>{c.pickUpCycleCd}</Table.Cell>
                        <Table.Cell>{c.paymentCycleCd}</Table.Cell>
                        <Table.Cell>{c.paymentMthCd}</Table.Cell>
                        <Table.Cell>{c.vaseYn}</Table.Cell>
                        <Table.Cell>{c.progrsCd}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            }
            </Table>   
            </Segment>
            </div>
        )
    }
}
