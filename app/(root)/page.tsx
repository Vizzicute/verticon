import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {fisrtName: 'Vic_Dev'};
  return (
    <section className="home">
      <div className='home-content'>
        <div className='home-header'>
            <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.fisrtName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
            />
        </div>
      </div>
    </section>
  )
}

export default Home
