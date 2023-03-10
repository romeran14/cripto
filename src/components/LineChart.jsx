import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import moment from 'moment/moment';


const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {

    coinTimestamp.push(moment.unix( coinHistory?.data?.history[i].timestamp).format("DD MM YY hh:mm "));
  }
  
  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice.reverse(),
        fill: true,
        backgroundColor: '#5112ff4a',
        borderColor: '#5112ff',
        tension: 0.5,
        borderWidth:2,
        pointBorderWidth:0.5,
        pointHitRadius:0.5,
        pointRadius:2
      },
    ],
  };

  const options = {
    scales: {
        
      y: 
        {
          ticks: {
            beginAtZero: true,
          },
          type : "linear"
        },
        x: 
        {
            ticks: {
                beginAtZero: true,
              },
     
        },
      
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;