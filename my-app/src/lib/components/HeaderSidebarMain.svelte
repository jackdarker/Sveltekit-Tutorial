<div class="grid_columns">
    <div class="filter_column_outer"><slot name="Search" /></div>
    <div class="grid_columns">
        <p class="grid_column_outer2"><slot name="Image" /></p>
        <div class="grid_column_outer"><slot /></div>
    </div>
</div>

<style>
    .grid_columns:before, .grid_columns:after {
       content: " ";
       display: table;
   }
   .grid_columns:after {
   clear: both;
   }
   .grid_columns .filter_column_outer {
       box-sizing: border-box;
       width: 260px;
       float: left;
   }
  
</style>