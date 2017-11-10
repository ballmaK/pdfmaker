<template>
  <q-list>
    <div v-for="(value, key) in examples" :key="key">
      <q-collapsible 
        icon="explore" 
        :label="key"
        group="simple"
      >
        <div>
          <q-list highlight>
            <q-item
              v-for="(vv, kk) in value" :key="kk"
            >
              <q-item-side left>
                <q-item-tile icon="add" color="green" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label
                  @click="addExample(vv)"
                >{{kk}}</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </div>
      </q-collapsible>
    </div>
    
  </q-list>
  
</template>

<script>
import {
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemTile,
  QItemMain,
  QCollapsible
} from 'quasar'
import {mapState} from 'vuex'
const examples = require('assets/js/pdfmaker-example.js').examples
import * as brace from 'brace'
export default {
  data () {
    return {
      examples: examples
    }
  },
  computed: {
    ...mapState([
      'doc'
    ])
  },
  components: {
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemTile,
    QItemMain,
    QCollapsible
  },
  methods: {
    addExample (ex) {
      this.$store.commit('ADD_CONTENT', ex)
      this.editor = brace.edit('vue-bulma-editor')
      // console.log(this.$store.getters.editorContent, this.$store.getters.doc)
      this.editor.session.setValue(this.$store.getters.editorContent)
    }
  },
  mounted () {
    console.log(examples)
  }
}
</script>

<style>
  .q-collapsible-sub-item {
     padding: 0; 
  }
  .q-list {
    border: 0; 
    padding: 0;  
}
</style>
