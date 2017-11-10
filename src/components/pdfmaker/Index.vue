<template>
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
    <!-- Header -->
    <q-toolbar slot="header">
      <q-toolbar-title>
        PDFMaker
        <div slot="subtitle">Powered by Xquiz Team</div>
      </q-toolbar-title>
      <q-btn flat @click="$refs.chartModal.toggle()">
        <q-icon name="insert_chart" />
      </q-btn>
      <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="widgets" />
      </q-btn>
    </q-toolbar>
    <div class="editor">
      <!-- <editor style="height: 100%; width: 100%"
              :fontsize="'12px'"
              :theme="'ambiance'"
              :mode="'json'"
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
    <div slot="right">
      <examples></examples>
    </div>
    <q-modal maximized
      ref="chartModal"
    >
      <q-btn flat @click="$refs.chartModal.close()">
        <q-icon name="done" />
      </q-btn>
      <div class="echart">
        <charts></charts>
      </div>
    </q-modal>
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
import Examples from '../pdfmaker/Examples.vue'
import Charts from '../pdfmaker/Charts.vue'
import { mapGetters, mapActions } from 'vuex'
const Brace = require('vue-bulma-brace')
const pdfMake = require('pdfmake/build/pdfmake.js')
const vfsFont = require('pdfmake/build/vfs_fonts.js')
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
    'examples': Examples,
    'charts': Charts
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
          this.$store.commit('REFRESH_DOC', JSON.parse(v))
        }
        catch (e) {
          console.log(e)
        }
      }
      else {
        this.$store.commit('RESET_DOC')
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
      var pdfDoc = ''
      try {
        pdfDoc = JSON.parse(JSON.stringify(this.$store.getters.doc))
      }
      catch (e) {
        console.log(e)
      }
      var doc = pdfMake.createPdf(pdfDoc)
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
    position: absolute;
    left: 0;
    border: 1px solid #000;
    height: 100%;
    width: 50%;
  }
</style>
