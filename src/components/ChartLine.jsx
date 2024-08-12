import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { dateTransform } from '../helper'
import { Condition } from './Condition'

export const ChartLine = ({ currentDayData }) => {
  const chart = useRef(null)
  const { date, hour, day } = currentDayData

  useEffect(() => {
    if (chart.current) {
      let myChart = echarts.getInstanceByDom(chart.current)

      if (myChart) {
        myChart.dispose()
      }

      myChart = echarts.init(chart.current)
      console.log(day)
      const hours = hour.map((el) => dateTransform({ date: el.time, format: 'hh:mm' }))
      const temp = hour.map((el) => el.temp_c)
      console.log(temp)
      myChart.setOption({
        xAxis: {
          type: 'category',
          splitLine: {
            show: true
          },
          data: hours

        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            symbol: 'circle',
            data: temp,
            type: 'line',
            smooth: true,
            areaStyle: {},
            lineStyle: {
              color: '#5470C6'
            },

            symbolSize: 5,

            label: {
              show: true
            }
          }
        ]
      })
    }

    return () => {
      if (chart.current) {
        const myChart = echarts.getInstanceByDom(chart.current)
        if (myChart) {
          myChart.dispose() // Clean up the chart instance
        }
      }
    }
  }, [currentDayData])

  return (
    <div className='bg-white p-4 rounded-2xl flex flex-warp'>
   {/*    <div className='bg-red-400 flex flex-col items-center w-[200px]'>
      <h2 className='font-bold text-2xl text-sky-blue-500 inline-block py-1'>{date}</h2>
      <Condition condition={day.condition} showTextCondition={true} />
      </div> */}
      <div id="chart-container" className='h-[400px] w-full' ref={chart} ></div>
    </div>
  )
}
