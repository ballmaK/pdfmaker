const pdfMake = require('pdfmake/build/pdfmake.js')
const vfsFont = require('pdfmake/build/vfs_fonts.js')

const state = {
  doc: {
    pageMargins: [10, 10, 10, 10],
    content: [],
    style: []
  },
  editorContent: '',
  editorContentJs: '',
  pdfContentBase64: '',
  refresh: false
}

const getters = {
  doc: state => state.doc,
  editorContent: state => state.editorContent,
  editorContentJs: state => state.editorContentJs,
  refresh: state => state.refresh
}

const mutations = {
  ADD_CONTENT (state, content) {
    state.doc.content.push(content)
    state.editorContent = JSON.stringify(state.doc, null, 2)
    state.refresh = true
    console.log('add content')
  },

  ADD_STYLE (state, style) {
    state.doc.style.push(style)
    state.refresh = true
    console.log('add style')
  },

  REFRESH_DOC (state, doc) {
    console.log('refresh doc', doc)
    state.doc = doc
    state.refresh = true
  },

  REFRESH_CONTENT (state, content) {
    state.editorContentJs = content
  },

  RESET_DOC (state) {
    state.doc = {
      content: [],
      style: []
    }
    console.log('reset doc')
  },

  UPDATE_REFRESH_STATE (state) {
    state.refresh = false
  },

  UPDATE_PDF_CONTENT (state, pdfContentBase64) {
    state.pdfContentBase64 = pdfContentBase64
  }
}

const actions = {
  genPDF ({commit}) {
    pdfMake.vfs = vfsFont.pdfMake.vfs
    var doc = pdfMake.createPdf(this.$store.getters.doc)
    doc.getDataUrl((dataUrl) => {
      commit('UPDATE_PDF_CONTENT')
      commit('UPDATE_REFRESH_STATE')
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
