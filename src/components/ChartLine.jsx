import React, { useContext, useEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { dateTransform } from '../helper'
import { Condition } from './Condition'
import { GlobalStateContext } from '../context/GlobalStateProvider'

export const ChartLine = ({ currentDayData }) => {
  const chartRef = useRef(null)
  const { date, hour, day } = currentDayData
  const { state } = useContext(GlobalStateContext)
  const { temp, darkMode } = state

  useEffect(() => {
    const hourData = hour.map((el) => {
      return {
        date: el.time,
        value: el[`temp_${temp}`],
        icon: el.condition.icon
      }
    })

    if (chartRef.current) {
      const root = am5.Root.new(chartRef.current)

      root.setThemes([am5themes_Animated.new(root)])

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: 'panX',
          wheelY: 'zoomX',
          layout: root.verticalLayout,
          pinchZoomX: true,
          paddingLeft: 0,
        })
      )

      const cursor = chart.set(
        'cursor',
        am5xy.XYCursor.new(root, {
          behavior: 'none'
        })
      )
      cursor.lineY.set('visible', false)

      const colorSet = am5.ColorSet.new(root, {})

      const xRenderer = am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true,
        minGridDistance: 50
      })
      xRenderer.grid.template.set('location', 0.5)
      xRenderer.labels.template.setAll({
        location: 0.5,
        multiLocation: 0.5,
        fill: darkMode && am5.color(0xFFFFFF)
      })

      const xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: 'hour', count: 1 },
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {})
        })
      )

      const yRenderer = am5xy.AxisRendererY.new(root, {})
      yRenderer.grid.template.set('forceHidden', true)

      yRenderer.labels.template.set('minPosition', 0.05)

     darkMode &&  xRenderer.grid.template.setAll({
        stroke: am5.color(0xFFFFFF), // Cambia las líneas verticales a blanco
        strokeOpacity: 0.2, // Opcional: ajusta la opacidad de las líneas
      });
      
      darkMode && 
      yRenderer.labels.template.setAll({
        fill: am5.color(0xFFFFFF) // Establece las etiquetas en color blanco
      });

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxPrecision: 0,
          extraMin: 0.1,
          renderer: yRenderer,
          
        })
      )

      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis,
          yAxis,
          valueYField: 'value',
          valueXField: 'date',
          maskBullets: false,
          tooltip: am5.Tooltip.new(root, {
            getFillFromSprite: darkMode? false : true,
            pointerOrientation: 'vertical',
            dy: -20,
            labelText: '{valueY}',
            
          }),
          stroke: darkMode ? am5.color(0xFFFFFF) : am5.color(0x456BCE)  ,
        })
      )
    
 
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: 'yyyy-MM-dd HH:mm',
        dateFields: ['date']
      })

      series.strokes.template.setAll({
        strokeDasharray: [3, 3],
        strokeWidth: 2,
      })

      let i = -1
      let a = -1
      series.bullets.push(function () {
        i++

        if (i > 7) {
          i = 0
        }

        const container = am5.Container.new(root, {
          centerX: am5.p50,
          centerY: am5.p50
        })

        container.children.push(
          am5.Circle.new(root, { radius: 20, fill: darkMode ?  am5.color(0x244189) :  am5.color(0x456BCE)  })
        )

        a++

        container.children.push(
          am5.Picture.new(root, {
            centerX: am5.p50,
            centerY: am5.p50,
            width: 50,
            height: 50,
            src: hourData[a].icon,
            colorSet
          })
        )

        return am5.Bullet.new(root, {
          sprite: container
        })
      })

      series.data.setAll(hourData)
      series.appear(1000)

      chart.appear(1000, 100)

      return () => {
        root.dispose()
      }
    }
  }, [currentDayData, temp, darkMode])

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex flex-col items-center gap-1">
      <div className="text-sky-blue-400 dark:text-white font-bold text-2xl mb-4">{date}</div>
      <div
        id="chartdiv"
        style={{ height: '250px', width: '100%' }}
        ref={chartRef}
      ></div>
    </div>
  )
}
