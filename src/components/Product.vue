<template>
  <div class="NoteList u-absolute-flex-column">
    <header class="app-header">APP_HEADER</header>
    <ul class="u-scroller">
      <li v-for="note in notes">
        <a>
          <i class="el-icon-arrow-right"></i>
          <p class="note-title">NOTE_TITLE</p>
          <p class="small">NOTE_META_DATA</p>
        </a>
      </li>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <el-button type="primary" class="u-elastic">Add Note</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
