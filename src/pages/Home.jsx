import React from 'react'
import MainImg from '../components/MainImg'
import InfoCard from '../components/InfoCard'
import {Component, Shell, Orbit} from 'lucide-react'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <section className="sec-home">
      <MainImg title="React Study" desc="리액트 주요 기능과 실습을 연습하는 공간입니다." />
      <div className="inner">        
        <div className="info-card-group">
          <InfoCard 
          title="Router" 
          desc="사용자가 요청한 URL 경로에 따라 해당하는 컴포넌트를 보여주는 네비게이션 시스템입니다." 
          icon={Shell}
          />
          <InfoCard 
          title="Component" 
          desc="UI를 구성하는 독립적이고 재사용 가능한 최소 단위입니다. 레고 블록처럼 조합하여 앱을 만듭니다." 
          icon={Component}
          />
          <InfoCard 
          title="State" 
          desc="컴포넌트 내부에서 변할 수 있는 데이터입니다. 상태가 업데이트되면 리액트가 화면을 자동으로 다시 그립니다." 
          icon={Orbit}
          />          
        </div>
      </div>
      <Counter />
    </section>
  )
}
