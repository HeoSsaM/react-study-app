import React, { useState } from 'react'
import {MousePointerClick} from 'lucide-react'
import ClassCard from '../components/ClassCard'

const classData = [
  { 
    id: 1, 
    title: 'HTML', 
    category: '퍼블리싱', 
    desc: '웹페이지의 뼈대를 잡는 가장 기본적이고 필수적인 마크업 언어입니다.' 
  },
  { 
    id: 2, 
    title: 'CSS', 
    category: '퍼블리싱', 
    desc: '레이아웃과 디자인을 담당하며, 웹사이트에 아름다운 색상과 스타일을 입힙니다.' 
  },
  { 
    id: 3, 
    title: 'JS', 
    category: '프론트', 
    desc: '클릭, 애니메이션 등 웹페이지에 생동감 넘치는 기능을 더하는 핵심 프로그래밍 언어입니다.' 
  },
  { 
    id: 4, 
    title: 'REACT', 
    category: '프론트', 
    desc: '컴포넌트 기반 UI 개발의 표준이며, 현대적인 웹 앱을 효율적으로 구축할 수 있게 도와줍니다.' 
  },
  { 
    id: 5, 
    title: 'PHOTOSHOP', 
    category: '디자인', 
    desc: '이미지 편집과 보정의 정석으로, 고퀄리티 그래픽 소스 제작에 최적화된 도구입니다.' 
  },
  { 
    id: 6, 
    title: 'ILLUSTRATOR', 
    category: '디자인', 
    desc: '로고, 아이콘 등 선명한 벡터 그래픽 디자인을 위한 필수 디자인 툴입니다.' 
  },
  { 
    id: 7, 
    title: 'VUE', 
    category: '프론트', 
    desc: '배우기 쉬운 문법과 강력한 성능을 동시에 갖춘 진보적인 자바스크립트 프레임워크입니다.' 
  },
  { 
    id: 8, 
    title: 'NODE', 
    category: '프론트', 
    desc: '자바스크립트만으로 서버 사이드 어플리케이션을 개발할 수 있게 해주는 런타임 환경입니다.' 
  },
]
export default function ClassPage() {
  const [category, setCategory] = useState('전체')
  const [selectedTitle, setSelectedTitle] = useState('')

  /* 필터링 */
  const filtered =
    category === "전체"// 1.조건: 선택된 카테고리가 '전체'인가 
      ? classData //2. true이면 원본데이터 전체를 보여줘.
      : classData.filter(item => item.category === category)
  //3. false(전체가 아니면)이면 item의 카테고리만 따로 빼서 filtered 변수에 저장

  return (
    <section className='sec-classpage'>
      <div className="inner">
        <h2>강의목록</h2>
        <p className="sub-title">
          카테고리 버튼을 클릭해서 듣고 싶은 강의를 찾아보세요.
        </p>

        <div className="tab-menu">
          <button onClick={() => setCategory('전체')}>전체</button>
          <button onClick={() => setCategory('퍼블리싱')}>퍼블리싱</button>
          <button onClick={() => setCategory('프론트')}>프론트</button>
          <button onClick={() => setCategory('디자인')}>디자인</button>
        </div>

        <p className="selected-text">
          선택한 카테고리 : <strong>{category}</strong>
        </p>

        <ul className="card-list">
          {
            filtered.map(item => (
              <li key={item.id}>
                <ClassCard item={item} onSelected={setSelectedTitle} />
              </li>
            ))}
        </ul>

        <div className="section-box">
          <h3><MousePointerClick fill='#5147aa' style={{verticalAlign: '-4px', marginRight: '10px'}}/> 선택한 강의</h3>
          <p>
            { selectedTitle ? 
            `${selectedTitle} 강의를 선택했습니다.` 
            : '아직 선택한 강의가 없습니다.'
            }
          </p>
        </div>
      </div>
    </section>
  )
}
