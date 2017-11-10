<template>
  <q-layout ref="layout" view="hHh LpR fFf" 
    :right-breakpoint="1100"
    :left-class="{'text-config-left': true}"
  >
    <div slot="left">
      <q-list>
        <q-list-header>Text Builder
          <q-btn flat color="secondary" @click="$refs.configDialog.close()">Close</q-btn>
          <q-btn flat color="secondary" @click="consoleElement">Add</q-btn>
        </q-list-header>

        <q-item>
          <q-item-main>
            <q-input inverted color="secondary" float-label="Text" type="textarea" :min-rows="8"/>
            <q-input v-model="element.style.fontSize" inverted color="secondary" float-label="Font Size" placeholder="Font Size" type="number" />
            <q-input v-model="element.style.characterSpacing" inverted color="secondary" float-label="CharacterSpacing" placeholder="CharacterSpacing" type="number" />
            <q-input v-model="element.style.color" inverted color="secondary" float-label="Color" prefix="#" placeholder="Hex Color" type="text" />
            <q-input v-model="element.style.background" inverted color="secondary" float-label="Background" prefix="#" placeholder="Background" type="text" />
            <q-select
              inverted
              v-model="select"
              :options="aligns"
              float-label="Alignment"
              color="secondary"
            />
            <q-toggle v-model="element.style.bold" label="Bold" color="secondary" left-label/>
            <q-toggle v-model="element.style.italics" label="Italics" color="secondary" left-label/>
            <q-toggle v-model="element.style.noWrap" label="NoWrap" color="secondary" left-label/>
          </q-item-main>
        </q-item>

      </q-list>
      
    </div>
  </q-layout>
</template>

<script>
import {PMText} from '../../../elements/text.js'
// const PMText = require('../../../elements/text.js')
import {
  QLayout,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QInput,
  QToggle,
  QSelect,
  QModal
} from 'quasar'
export default {
  data () {
    return {
      element: new PMText(),
      aligns: [
        {
          label: 'Justify',
          value: 'justify'
        },
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Right',
          value: 'right'
        }
      ]
    }
  },
  mounted () {
    console.log(new PMText())
  },
  methods: {
    consoleElement () {
      console.log(this.$data.element.translate())
    }
  },
  components: {
    QLayout,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QInput,
    QToggle,
    QSelect,
    QModal
  }
}
</script>

<style>
  .text-config-left {
    width: 350px!important;
  }
</style>

