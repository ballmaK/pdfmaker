module.exports.pdfcharts = {
  toSVG: (chart) => {
    // console.log(chart)
    chart.export.capture({}, function () {
      this.toSVG({}, function (data) {
        console.log(data)
      })
    })
  },
  line: {
    chart: (data) => {
      var chartInstance = window.AmCharts.makeChart('chartdiv', {
        'type': 'serial',
        'pathToImages': '/statics/images/amcharts/',
        'theme': 'light',
        'marginRight': 40,
        'marginLeft': 40,
        'autoMarginOffset': 20,
        'mouseWheelZoomEnabled': true,
        'dataDateFormat': 'YYYY-MM-DD',
        'valueAxes': [{
          'id': 'v1',
          'axisAlpha': 0,
          'position': 'left',
          'ignoreAxisWidth': true
        }],
        'balloon': {
          'borderThickness': 1,
          'shadowAlpha': 0
        },
        'graphs': [{
          'id': 'g1',
          'balloon': {
            'drop': true,
            'adjustBorderColor': false,
            'color': '#ffffff'
          },
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletColor': '#FFFFFF',
          'bulletSize': 5,
          'hideBulletsCount': 50,
          'lineThickness': 2,
          'title': 'red line',
          'useLineColorForBulletBorder': true,
          'valueField': 'value',
          'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
        }],
        'chartCursor': {
          'pan': true,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'cursorAlpha': 1,
          'cursorColor': '#258cbb',
          'limitToGraph': 'g1',
          'valueLineAlpha': 0.2,
          'valueZoomable': true
        },
        'categoryField': 'date',
        'categoryAxis': {
          'parseDates': true,
          'dashLength': 1,
          'minorGridEnabled': true
        },
        'export': {
          'enabled': true,
          'menu': [ {
            'class': 'export-main',
            'label': 'Download',
            'menu': [ 'SVG' ]
          }]
        },
        'dataProvider': data
      })
      return chartInstance
    }
  },
  pie: {
    chart: (data) => {
      return window.AmCharts.makeChart('chartdiv', {
        'type': 'serial',
        'pathToImages': '/statics/images/amcharts/',
        'theme': 'light',
        'marginRight': 40,
        'marginLeft': 40,
        'autoMarginOffset': 20,
        'mouseWheelZoomEnabled': true,
        'dataDateFormat': 'YYYY-MM-DD',
        'valueAxes': [{
          'id': 'v1',
          'axisAlpha': 0,
          'position': 'left',
          'ignoreAxisWidth': true
        }],
        'balloon': {
          'borderThickness': 1,
          'shadowAlpha': 0
        },
        'graphs': [{
          'id': 'g1',
          'balloon': {
            'drop': true,
            'adjustBorderColor': false,
            'color': '#ffffff'
          },
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletColor': '#FFFFFF',
          'bulletSize': 5,
          'hideBulletsCount': 50,
          'lineThickness': 2,
          'title': 'red line',
          'useLineColorForBulletBorder': true,
          'valueField': 'value',
          'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
        }],
        'chartCursor': {
          'pan': true,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'cursorAlpha': 1,
          'cursorColor': '#258cbb',
          'limitToGraph': 'g1',
          'valueLineAlpha': 0.2,
          'valueZoomable': true
        },
        'categoryField': 'date',
        'categoryAxis': {
          'parseDates': true,
          'dashLength': 1,
          'minorGridEnabled': true
        },
        'export': {
          'enabled': true,
          'menu': [ {
            'class': 'export-main',
            'label': 'Download',
            'menu': [ 'SVG' ]
          }]
        },
        'dataProvider': data
      })
    }
  }
}

// function _renderHandler (e) {
//   e.chart.export.capture({}, function () {
//     // SAVE TO JPG
//     this.toSVG({}, function (data) {
//       // LOG IMAGE DATA
//       console.log(data)
//     })
//   })
// }
