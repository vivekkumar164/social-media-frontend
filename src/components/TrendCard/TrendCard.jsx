import React from 'react'
import { trendData } from '../../Data/TrendData'

import './TrendCard.css'
const TrendCard = () => {
  return (
    <div className='TrendCard'>
        <h3>Trends</h3>
        {trendData.map((trend,id)=>{
            return (
                <div className="trend">
                    <span>#{trend.name}</span><span>{trend.shares} k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard