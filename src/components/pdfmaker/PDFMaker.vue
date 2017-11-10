<template>
  <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100">
    <!-- Header -->
    <q-toolbar slot="header">
      <q-toolbar-title>
        PDFMaker
        <div slot="subtitle">Powered by Xquiz Team</div>
      </q-toolbar-title>
      <!-- <q-btn flat @click="$refs.chartModal.toggle()">
        <q-icon name="insert_chart" />
      </q-btn> -->
      <!-- <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="widgets" />
      </q-btn> -->
    </q-toolbar>
    <div slot="left">
      <element-list></element-list>
    </div>
    <div slot="right">
      <style-list></style-list>
    </div>
    <div class="editor" slot="">
      <!-- <editor style="height: 100%; width: 100%"
              :fontsize="'12px'"
              :theme="'ambiance'"
              :mode="'javascript'"
              :codefolding="'markbegin'"
              :softwrap="'free'"
              :selectionstyle="'text'"
              :highlightline="true"
              :content="editorContent"
              v-on:code-change="editorOnChange"
      ></editor> -->
    </div>
    <iframe id="pdf" :src="pdfContentBase64">
    </iframe>
    <router-view />
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QModal
} from 'quasar'
require('amcharts3/amcharts/amcharts')
require('amcharts3/amcharts/serial')
require('amcharts3/amcharts/plugins/export')
require('fabric-webpack')
import Elements from '../pdfmaker/elements/Index.vue'
import { mapGetters, mapActions } from 'vuex'
const Brace = require('vue-bulma-brace')
const pdfMake = require('pdfmake/build/pdfmake.js')
const vfsFont = require('pdfmake/build/vfs_fonts.js')
const chartdata = require('assets/js/charts-data/data').chartdata
const pdfcharts = require('assets/js/pdfmaker-charts').pdfcharts
var lastGen, lastChanged
export default {
  data () {
    return {
      docDefinition: {},
      timer: null,
      pdfContentBase64: '',
      ...mapGetters([
        'doc', 'editorContent'
      ])
    }
  },
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QModal,
    'editor': Brace,
    'element-list': Elements
  },
  methods: {
    editorOnChange (v) {
      console.log('new input', v)
      // if (!v) this.$store.commit('RESET_DOC')
      var vm = this
      if (this.$data.timer) {
        clearTimeout(this.$data.timer)
      }
      lastChanged = new Date()
      // this.$data.docDefinition = v
      // console.log('json v', JSON.parse(v), v)
      if (v) {
        try {
          // this.$store.commit('REFRESH_DOC', JSON.parse(v))
          this.$store.commit('REFRESH_CONTENT', v)
        }
        catch (e) {
          console.log(e)
        }
      }
      else {
        this.$store.commit('RESET_DOC')
        this.$store.commit('REFRESH_CONTENT', v)
      }
      this.$data.timer = setTimeout(function () {
        if (!lastGen || lastGen < lastChanged) {
          console.log('refresh pdf ..')
          vm.getContent()
        };
      }, 300)
    },
    ...mapActions({
      'genPDF': 'genPDF'
    }),
    getContent () {
      pdfMake.vfs = vfsFont.pdfMake.vfs
      pdfcharts.toSVG(pdfcharts.line.chart(chartdata.line))
      // var pdfDoc = ''
      // console.log('svg', svg.data)
      var dd = {}
      try {
        // pdfDoc = JSON.parse(JSON.stringify(this.$store.getters.doc))
        console.log(this.$store.getters.editorContentJs)
        eval(this.$store.getters.editorContentJs)
        // console.log('ddddd', dd)
      }
      catch (e) {
        console.log(e)
      }
      var doc = pdfMake.createPdf(dd)
      doc.getDataUrl((dataUrl) => {
        this.$data.pdfContentBase64 = dataUrl
        // this.$store.commit('UPDATE_REFRESH_STATE')
      })
    }
  }
}
</script>

<style>
  .editor{
    position: absolute;
    left: 50%;
    width: 50%;
    border: 1px solid #000;
    height: 100%;
  }
  #pdf {
    margin: 0 auto;
    border: 1px solid #000;
    height: 100%;
    width: 80%;
  }
</style>
