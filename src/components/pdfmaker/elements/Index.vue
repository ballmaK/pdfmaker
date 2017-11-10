<template>
  <div>
    <q-list highlight>
      <q-list-header>Available Element</q-list-header>

      <q-item v-for="element in elements" :key="element.name"
        @click="showConfigDialog(element)"
      >
        <q-item-side :icon="element.icon" color="secondary" />
        <q-item-main>
          <q-item-tile label>{{element.label}}</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="grey" />
      </q-item>

    </q-list>
    <q-modal ref="configDialog" maximized>
      <pm-text></pm-text>
    </q-modal>
  </div>
  
</template>

<script>
import elements from 'assets/json/support-elements.json'
import Text from './Text.vue'
import {
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QModal
} from 'quasar'
export default {
  data () {
    return {
      elements: elements
    }
  },
  components: {
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QModal,
    'pm-text': Text
  },
  methods: {
    showConfigDialog (element) {
      console.log(element, this.$refs)
      this.$refs.configDialog.open()
    }
  }
}
</script>

<style>
</style>
