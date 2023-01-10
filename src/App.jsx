import { Router, Routes, Route, Link } from 'react-router-dom'
import Layout from 'antd/es/layout/layout'
import Typography from 'antd/es/typography/Typography'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import News from './components/News'
import Cryptodetails from './components/Cryptodetails'
import Cryptocurrencies from './components/Cryptocurrencies'
import { Space } from 'antd'



function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/crypto/:coinId" element={<Cryptodetails />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5} style={{color:'white', textAlign:'center'}}>
        <Typography.Title>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to='/' >Home</Link>
          <Link to='/exchanges' >Exchanges</Link>
          <Link to='/news' >News</Link>
        </Space>
      </div>
      </div>

    </div>
  );
}

export default App