<template>
  <q-modal :ref="ref" maximized>
    <h4>Config Modal</h4>
    <q-btn color="primary" @click="$refs.basicModal.close()">Close</q-btn>
  </q-modal>
</template>
<script>
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
  props: ['element', 'ref'],
  components: {
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QModal
  }
}
</script>
