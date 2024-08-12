import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';
import { dateTransform } from '../helper';
export const ChartLine = ({hourData}) => {
  const chart = useRef()
  const [dataChart, setDataChartt] = useState({})


 const createChartData = () =>{
  setDataChartt(hourData)
 }

  useEffect(() => {
    createChartData()

    const hours = hourData.map((el)=> ( dateTransform({ date: el.time, format: 'hh:mm A' }) ))
    const temp = hourData.map((el)=>  el.temp_c)
   
    console.log(hours,temp)
 
  if(chart){
    const myChart = echarts.init(chart.current)


    myChart.setOption({
      xAxis: {
        type: 'category',
        splitLine: {
          show: true
        },
    /*     axisLabel: {
          margin: 30,
          fontSize: 16
        }, */
        data: hours
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: temp,
          type: 'line',
          smooth: true,
          areaStyle: {},
          lineStyle: {
            color: '#5470C6',
           
           
          },
        }
      ]
    }); 
  }
   
  }, [hourData])
  

/*   */
  return (
    <div id="chart-container" className='h-[400px] w- bg-white p-4 rounded-2xl' ref={chart}></div>
  )
}
