class PMText {
  constructor () {
    this.type = 'pm_text'
    this.text = []
    this.class = []
    this.style = {
      fontSize: 10,
      bold: false,
      italics: false,
      alignment: [],
      color: '000000',
      decoration: [],
      decorationColor: '',
      decorationStyle: [],
      background: 'ffffff',
      lineHeight: 1,
      characterSpacing: 0,
      link: '',
      linkToPage: '',
      noWrap: false,
      preserveLeadingSpaces: ''
    }
  }

  addContent = function (element) {
    var vm = this
    if (element.type !== vm.type) Error('Only allow text nest')
    vm.text.push(element.translate())
  }

  mergeStyle = function (style) {
    var vm = this
    Object.assign(vm.style, style)
  }

  translate = function () {
    var vm = this
    var t = {}
    t.text = vm.text
    Object.assign(t, vm.style)
    return t
  }
}

export {PMText}
