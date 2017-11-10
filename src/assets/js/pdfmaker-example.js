// const charts = (type) => {
//   console.log('hahaha chart')
//   var chart
//   switch (type) {
//     case 'pie':
//       var Pie = require('paths-js/pie')
//       chart = Pie({
//         data: [
//           { name: 'Italy', population: 59859996 },
//           { name: 'Mexico', population: 118395054 },
//           { name: 'France', population: 65806000 },
//           { name: 'Argentina', population: 40117096 },
//           { name: 'Japan', population: 127290000 }
//         ],
//         accessor: function (x) { return x.population },
//         compute: {
//           color: function (i) { return '#000000' }
//         },
//         center: [20 + 100, 15 + 100],
//         r: 30,
//         R: 50
//       })
//       break
//     case 'line':
//       console.log('ready to draw line chart')
//       break
//     default:
//       console.log('ready to draw unknown chart')
//   }
//   console.log('--------------------------------------------------')
//   console.log('chart', chart)
//   var paths = chart.curves.map((c) => {
//     console.log(c.sector.path)
//     return {
//       type: 'path',
//       d: c.sector.path.print(),
//       line: {length: 5},
//       lineColor: 'blue'
//     }
//   })
//   var texts = chart.curves.map((c) => {
//     return {
//       type: 'text',
//       absolutePosition: {x: c.sector.centroid[0], y: c.sector.centroid[1]},
//       text: 'My TEXT'
//     }
//   })
//   var pChart = []
//   return pChart.concat(texts).concat(paths)
// }
module.exports.examples = {
  list: {
    unordered: {
      ul: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    unordered_long: {
      ul: [
        'item 1',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
        'item 3'
      ]
    },
    ordered: {
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_long: {
      ol: [
        'item 1',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
        'item 3'
      ]
    },
    ordered_desc: {
      reversed: true,
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_with_start: {
      start: 50,
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_with_value: {
      ol: [
        {text: 'item 1', counter: 10},
        {text: 'item 2', counter: 20},
        {text: 'item 3', counter: 30},
        {text: 'item 4 without own value'}
      ]
    },
    ordered_nested: {
      ol: [
        'item 1',
        [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
          {
            ol: [
              'subitem 1',
              'subitem 2',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              {text: [
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
              ]},

              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 4',
              'subitem 5'
            ]
          }
        ],
        'item 3\nsecond line of item3'
      ]
    },
    unordered_nested: {
      ol: [
        'item 1',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
        {
          ul: [
            'subitem 1',
            'subitem 2',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            {text: [
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
            ]},

            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 4',
            'subitem 5'
          ]
        },
        'item 3\nsecond line of item3'
      ]
    },
    unordered_columns: {
      columns: [
        {
          ul: [
            'item 1',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
          ]
        },
        {
          ul: [
            'item 1',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
          ]
        }
      ]
    },
    ordered_columns: {
      columns: [
        {
          ol: [
            'item 1',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
          ]
        },
        {
          ol: [
            'item 1',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
          ]
        }
      ]
    },
    nested_columns: {
      ul: [
        'item 1',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
        {
          ol: [
            [
              {
                columns: [
                  'column 1',
                  {
                    stack: [
                      'column 2',
                      {
                        ul: [
                          'item 1',
                          'item 2',
                          {
                            ul: [
                              'item',
                              'item',
                              'item'
                            ]
                          },
                          'item 4'
                        ]
                      }
                    ]
                  },
                  'column 3',
                  'column 4'
                ]
              },
              'subitem 1 in a vertical container',
              'subitem 2 in a vertical container'
            ],
            'subitem 2',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            {text: [
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit'
            ]},

            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
            'subitem 4',
            'subitem 5'
          ]
        },
        'item 3\nsecond line of item3'
      ]
    },
    unordered_marker_square: {
      type: 'square',
      ul: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    unordered_marker_circle: {
      type: 'circle',
      ul: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    unordered_colored: {
      color: 'blue',
      ul: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    unordered_colored_marker: {
      color: 'blue',
      markerColor: 'red',
      ul: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_colored: {
      color: 'blue',
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_colored_marker: {
      color: 'blue',
      markerColor: 'red',
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },

    ordered_lower_alpha_marker: {
      type: 'lower-alpha',
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_upper_alpha_marker: {
      type: 'upper-alpha',
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },

    ordered_upper_roman_marker: {
      type: 'upper-roman',
      ol: [
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5'
      ]
    },
    ordered_lower_roman_marker: {
      type: 'lower-roman',
      ol: [
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5'
      ]
    },
    ordered_none_marker: {
      type: 'none',
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    unordered_none_marker: {
      type: 'none',
      ul: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_separator: {
      separator: ')',
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_complex_separator: {
      separator: ['(', ')'],
      ol: [
        'item 1',
        'item 2',
        'item 3'
      ]
    },
    ordered_custom_marker: {
      ol: [
        'item 1',
        {text: 'item 2', listType: 'none'},
        {text: 'item 3', listType: 'upper-roman'}
      ]
    }
  },
  table: {
    table_simple: {
      style: 'tableExample',
      table: {
        body: [
          ['Column 1', 'Column 2', 'Column 3'],
          ['One value goes here', 'Another one here', 'OK?']
        ]
      }
    },
    table_with_nested_elements: {
      style: 'tableExample',
      table: {
        body: [
          ['Column 1', 'Column 2', 'Column 3'],
          [
            {
              stack: [
                'Let\'s try an unordered list',
                {
                  ul: [
                    'item 1',
                    'item 2'
                  ]
                }
              ]
            },
            [
              'or a nested table',
              {
                table: {
                  body: [
                    ['Col1', 'Col2', 'Col3'],
                    ['1', '2', '3'],
                    ['1', '2', '3']
                  ]
                }
              }
            ],
            {text: [
              'Inlines can be ',
              {text: 'styled\n', italics: true},
              {text: 'easily as everywhere else', fontSize: 10}]
            }
          ]
        ]
      }
    },
    table_with_custom_column_width_1: {
      style: 'tableExample',
      table: {
        widths: [100, '*', 200, '*'],
        body: [
          ['width=100', 'star-sized', 'width=200', 'star-sized'],
          ['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
        ]
      }
    },
    table_with_custom_column_width_2: {
      style: 'tableExample',
      table: {
        widths: ['*', 'auto'],
        body: [
          ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.']
        ]
      }
    },
    table_with_custom_column_width_3: {
      style: 'tableExample',
      table: {
        widths: ['*', 'auto'],
        body: [
          ['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}]
        ]
      }
    },
    table_with_col_row_spans: {
      style: 'tableExample',
      color: '#444',
      table: {
        widths: [200, 'auto', 'auto'],
        headerRows: 2,
        // keepWithHeaderRows: 1,
        body: [
          [{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
          [{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          [{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
          ['', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
          ['Sample value 1', '', '']
        ]
      }
    },
    table_with_header: {
      style: 'tableExample',
      table: {
        headerRows: 1,
        // dontBreakRows: true,
        // keepWithHeaderRows: 1,
        body: [
          [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
          [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ]
        ]
      }
    },
    table_with_styles_noborder: {
      style: 'tableExample',
      table: {
        headerRows: 1,
        body: [
          [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3']
        ]
      },
      layout: 'noBorders'
    },
    table_with_styles_hearderline: {
      style: 'tableExample',
      table: {
        headerRows: 1,
        body: [
          [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3']
        ]
      },
      layout: 'headerLineOnly'
    },
    table_with_styles_lightHorizontalLines: {
      style: 'tableExample',
      table: {
        headerRows: 1,
        body: [
          [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3']
        ]
      },
      layout: 'lightHorizontalLines'
    },
    table_with_styles_custom: {
      style: 'tableExample',
      table: {
        headerRows: 1,
        body: [
          [{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3']
        ]
      },
      layout: {
        hLineWidth: function (i, node) {
          return (i === 0 || i === node.table.body.length) ? 2 : 1
        },
        vLineWidth: function (i, node) {
          return (i === 0 || i === node.table.widths.length) ? 2 : 1
        },
        hLineColor: function (i, node) {
          return (i === 0 || i === node.table.body.length) ? 'black' : 'gray'
        },
        vLineColor: function (i, node) {
          return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray'
        }
        // paddingLeft: function(i, node) { return 4; },
        // paddingRight: function(i, node) { return 4; },
        // paddingTop: function(i, node) { return 2; },
        // paddingBottom: function(i, node) { return 2; },
        // fillColor: function (i, node) { return null; }
      }
    },
    table_with_styles_custom_zebra: {
      style: 'tableExample',
      table: {
        body: [
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3'],
          ['Sample value 1', 'Sample value 2', 'Sample value 3']
        ]
      },
      layout: {
        fillColor: function (i, node) { return (i % 2 === 0) ? '#CCCCCC' : null }
      }
    },
    table_with_styles_custom_border_1: {
      style: 'tableExample',
      table: {
        body: [
          [
            {
              border: [false, true, false, false],
              fillColor: '#eeeeee',
              text: 'border:\n[false, true, false, false]'
            },
            {
              border: [false, false, false, false],
              fillColor: '#dddddd',
              text: 'border:\n[false, false, false, false]'
            },
            {
              border: [true, true, true, true],
              fillColor: '#eeeeee',
              text: 'border:\n[true, true, true, true]'
            }
          ],
          [
            {
              rowSpan: 3,
              border: [true, true, true, true],
              fillColor: '#eeeeff',
              text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
            },
            {
              border: undefined,
              fillColor: '#eeeeee',
              text: 'border:\nundefined'
            },
            {
              border: [true, false, false, false],
              fillColor: '#dddddd',
              text: 'border:\n[true, false, false, false]'
            }
          ],
          [
            '',
            {
              colSpan: 2,
              border: [true, true, true, true],
              fillColor: '#eeffee',
              text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
            },
            ''
          ],
          [
            '',
            {
              border: undefined,
              fillColor: '#eeeeee',
              text: 'border:\nundefined'
            },
            {
              border: [false, false, true, true],
              fillColor: '#dddddd',
              text: 'border:\n[false, false, true, true]'
            }
          ]
        ]
      },
      layout: {
        defaultBorder: false
      }
    },
    table_with_styles_custom_border_2: {
      style: 'tableExample',
      table: {
        body: [
          [
            {
              border: [false, false, false, false],
              fillColor: '#eeeeee',
              text: 'border:\n[false, false, false, false]'
            },
            {
              fillColor: '#dddddd',
              text: 'border:\nundefined'
            },
            {
              fillColor: '#eeeeee',
              text: 'border:\nundefined'
            }
          ],
          [
            {
              fillColor: '#dddddd',
              text: 'border:\nundefined'
            },
            {
              fillColor: '#eeeeee',
              text: 'border:\nundefined'
            },
            {
              border: [true, true, false, false],
              fillColor: '#dddddd',
              text: 'border:\n[true, true, false, false]'
            }
          ]
        ]
      }
    },
    table_with_styles_custom_border_3: {
      style: 'tableExample',
      table: {
        body: [
          [
            '',
            'column 1',
            'column 2',
            'column 3'
          ],
          [
            'row 1',
            {
              rowSpan: 3,
              colSpan: 3,
              border: [true, true, true, true],
              fillColor: '#cccccc',
              text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
            },
            '',
            ''
          ],
          [
            'row 2',
            '',
            '',
            ''
          ],
          [
            'row 3',
            '',
            '',
            ''
          ]
        ]
      },
      layout: {
        defaultBorder: false
      }
    },
    table_with_styles_custom_spans_1: {
      style: 'tableExample',
      table: {
        body: [
          [
            {
              colSpan: 3,
              text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
              fillColor: '#eeeeee',
              border: [false, false, false, false]
            },
            '',
            ''
          ],
          [
            'border:\nundefined',
            'border:\nundefined',
            'border:\nundefined'
          ]
        ]
      }
    },
    table_with_styles_custom_spans_2: {
      style: 'tableExample',
      table: {
        body: [
          [
            {rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
            'border:\nundefined',
            'border:\nundefined'
          ],
          [
            '',
            'border:\nundefined',
            'border:\nundefined'
          ],
          [
            '',
            'border:\nundefined',
            'border:\nundefined'
          ]
        ]
      }
    }
  },
  chart: {
    line: {
      image: 'statics/amCharts.svg'
    },
    pie: {
      image: ''
    }
  }
}
