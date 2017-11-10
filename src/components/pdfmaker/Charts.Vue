<template>
  <div class="row">
    <div id="chartdiv"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chart: null
    }
  },
  methods: {
    showSVG (svg) {
      console.log(this.$data.chart)
    },
    transSVG (e, svg) {
      var format = 'image/svg+xml'
      var DOMP = new DOMParser().parseFromString(svg, format)
      console.log(e.chart)
      var data = new XMLSerializer().serializeToString(DOMP)
      var blob = new Blob([data], {type: format})
      console.log(blob)
      // this.downloadSVG()(blob, 'test.svg')
    },
    downloadSVG () {
      var a = document.createElement('a')
      document.body.appendChild(a)
      a.style = 'display: none'
      return function (blob, fileName) {
        console.log('haha')
        // blob = new Blob([json], {type: 'octet/stream'}),
        var url = window.URL.createObjectURL(blob)
        a.href = url
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(url)
      }
    }
  }
  // mounted () {
  //   var vm = this
  //   this.$data.chart = window.AmCharts.makeChart('chartdiv', {
  //     'type': 'serial',
  //     'pathToImages': '/statics/images/amcharts/',
  //     'theme': 'light',
  //     'marginRight': 40,
  //     'marginLeft': 40,
  //     'autoMarginOffset': 20,
  //     'mouseWheelZoomEnabled': true,
  //     'dataDateFormat': 'YYYY-MM-DD',
  //     'valueAxes': [{
  //       'id': 'v1',
  //       'axisAlpha': 0,
  //       'position': 'left',
  //       'ignoreAxisWidth': true
  //     }],
  //     'balloon': {
  //       'borderThickness': 1,
  //       'shadowAlpha': 0
  //     },
  //     'graphs': [{
  //       'id': 'g1',
  //       'balloon': {
  //         'drop': true,
  //         'adjustBorderColor': false,
  //         'color': '#ffffff'
  //       },
  //       'bullet': 'round',
  //       'bulletBorderAlpha': 1,
  //       'bulletColor': '#FFFFFF',
  //       'bulletSize': 5,
  //       'hideBulletsCount': 50,
  //       'lineThickness': 2,
  //       'title': 'red line',
  //       'useLineColorForBulletBorder': true,
  //       'valueField': 'value',
  //       'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
  //     }],
  //     'chartCursor': {
  //       'pan': true,
  //       'valueLineEnabled': true,
  //       'valueLineBalloonEnabled': true,
  //       'cursorAlpha': 1,
  //       'cursorColor': '#258cbb',
  //       'limitToGraph': 'g1',
  //       'valueLineAlpha': 0.2,
  //       'valueZoomable': true
  //     },
  //     'categoryField': 'date',
  //     'categoryAxis': {
  //       'parseDates': true,
  //       'dashLength': 1,
  //       'minorGridEnabled': true
  //     },
  //     'export': {
  //       'enabled': true,
  //       'menu': [ {
  //         'class': 'export-main',
  //         'label': 'Download',
  //         'menu': [ 'SVG' ]
  //       }]
  //     },
  //     'dataProvider': [{
  //       'date': '2012-07-27',
  //       'value': 13
  //     }, {
  //       'date': '2012-07-28',
  //       'value': 11
  //     }, {
  //       'date': '2012-07-29',
  //       'value': 15
  //     }, {
  //       'date': '2012-07-30',
  //       'value': 16
  //     }, {
  //       'date': '2012-07-31',
  //       'value': 18
  //     }, {
  //       'date': '2012-08-01',
  //       'value': 13
  //     }, {
  //       'date': '2012-08-02',
  //       'value': 22
  //     }, {
  //       'date': '2012-08-03',
  //       'value': 23
  //     }, {
  //       'date': '2012-08-04',
  //       'value': 20
  //     }, {
  //       'date': '2012-08-05',
  //       'value': 17
  //     }, {
  //       'date': '2012-08-06',
  //       'value': 16
  //     }, {
  //       'date': '2012-08-07',
  //       'value': 18
  //     }, {
  //       'date': '2012-08-08',
  //       'value': 21
  //     }, {
  //       'date': '2012-08-09',
  //       'value': 26
  //     }, {
  //       'date': '2012-08-10',
  //       'value': 24
  //     }, {
  //       'date': '2012-08-11',
  //       'value': 29
  //     }, {
  //       'date': '2012-08-12',
  //       'value': 32
  //     }, {
  //       'date': '2012-08-13',
  //       'value': 18
  //     }, {
  //       'date': '2012-08-14',
  //       'value': 24
  //     }, {
  //       'date': '2012-08-15',
  //       'value': 22
  //     }, {
  //       'date': '2012-08-16',
  //       'value': 18
  //     }, {
  //       'date': '2012-08-17',
  //       'value': 19
  //     }, {
  //       'date': '2012-08-18',
  //       'value': 14
  //     }, {
  //       'date': '2012-08-19',
  //       'value': 15
  //     }, {
  //       'date': '2012-08-20',
  //       'value': 12
  //     }, {
  //       'date': '2012-08-21',
  //       'value': 8
  //     }, {
  //       'date': '2012-08-22',
  //       'value': 9
  //     }, {
  //       'date': '2012-08-23',
  //       'value': 8
  //     }, {
  //       'date': '2012-08-24',
  //       'value': 7
  //     }, {
  //       'date': '2012-08-25',
  //       'value': 5
  //     }, {
  //       'date': '2012-08-26',
  //       'value': 11
  //     }, {
  //       'date': '2012-08-27',
  //       'value': 13
  //     }, {
  //       'date': '2012-08-28',
  //       'value': 18
  //     }, {
  //       'date': '2012-08-29',
  //       'value': 20
  //     }, {
  //       'date': '2012-08-30',
  //       'value': 29
  //     }, {
  //       'date': '2012-08-31',
  //       'value': 33
  //     }, {
  //       'date': '2012-09-01',
  //       'value': 42
  //     }, {
  //       'date': '2012-09-02',
  //       'value': 35
  //     }, {
  //       'date': '2012-09-03',
  //       'value': 31
  //     }, {
  //       'date': '2012-09-04',
  //       'value': 47
  //     }, {
  //       'date': '2012-09-05',
  //       'value': 52
  //     }, {
  //       'date': '2012-09-06',
  //       'value': 46
  //     }, {
  //       'date': '2012-09-07',
  //       'value': 41
  //     }, {
  //       'date': '2012-09-08',
  //       'value': 43
  //     }, {
  //       'date': '2012-09-09',
  //       'value': 40
  //     }, {
  //       'date': '2012-09-10',
  //       'value': 39
  //     }, {
  //       'date': '2012-09-11',
  //       'value': 34
  //     }, {
  //       'date': '2012-09-12',
  //       'value': 29
  //     }, {
  //       'date': '2012-09-13',
  //       'value': 34
  //     }, {
  //       'date': '2012-09-14',
  //       'value': 37
  //     }, {
  //       'date': '2012-09-15',
  //       'value': 42
  //     }, {
  //       'date': '2012-09-16',
  //       'value': 49
  //     }, {
  //       'date': '2012-09-17',
  //       'value': 46
  //     }, {
  //       'date': '2012-09-18',
  //       'value': 47
  //     }, {
  //       'date': '2012-09-19',
  //       'value': 55
  //     }, {
  //       'date': '2012-09-20',
  //       'value': 59
  //     }, {
  //       'date': '2012-09-21',
  //       'value': 58
  //     }, {
  //       'date': '2012-09-22',
  //       'value': 57
  //     }, {
  //       'date': '2012-09-23',
  //       'value': 61
  //     }, {
  //       'date': '2012-09-24',
  //       'value': 59
  //     }, {
  //       'date': '2012-09-25',
  //       'value': 67
  //     }, {
  //       'date': '2012-09-26',
  //       'value': 65
  //     }, {
  //       'date': '2012-09-27',
  //       'value': 61
  //     }, {
  //       'date': '2012-09-28',
  //       'value': 66
  //     }, {
  //       'date': '2012-09-29',
  //       'value': 69
  //     }, {
  //       'date': '2012-09-30',
  //       'value': 71
  //     }, {
  //       'date': '2012-10-01',
  //       'value': 67
  //     }, {
  //       'date': '2012-10-02',
  //       'value': 63
  //     }, {
  //       'date': '2012-10-03',
  //       'value': 46
  //     }, {
  //       'date': '2012-10-04',
  //       'value': 32
  //     }, {
  //       'date': '2012-10-05',
  //       'value': 21
  //     }, {
  //       'date': '2012-10-06',
  //       'value': 18
  //     }, {
  //       'date': '2012-10-07',
  //       'value': 21
  //     }, {
  //       'date': '2012-10-08',
  //       'value': 28
  //     }]
  //   })
  //   vm.$data.chart.addListener('rendered', zoomChart)

  //   // zoomChart()

  //   function zoomChart (e) {
  //     vm.$data.chart.zoomToIndexes(vm.$data.chart.dataProvider.length - 40, vm.$data.chart.dataProvider.length - 1)
  //     console.log(e.chart.export.capture)
  //     e.chart.export.capture({}, function () {
  //       // SAVE TO JPG
  //       this.toSVG({}, function (data) {
  //         // LOG IMAGE DATA
  //         console.log(data)
  //         vm.transSVG(e, data)
  //       })
  //     })
  //   }
  // }
}
</script>

<style>
  #chartdiv {
    width	: 100%;
    height	: 500px;
  }
</style>

