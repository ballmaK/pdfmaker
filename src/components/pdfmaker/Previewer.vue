<template>
  <iframe id="previewer" :src="pdfContentBase64"></iframe>
</template>
<script>
export default {
  data () {
    return {
      pdfContentBase64: ''
    }
  }
}
</script>


<style>
  #previewer {
    margin: 0 auto;
    border: 1px solid #000;
    height: 100%;
    width: 80%;
  }
</style>
