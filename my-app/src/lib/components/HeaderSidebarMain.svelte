<div class="grid_columns">
    <div class="filter_column_outer"><slot name="Search" /></div>
    <div class="grid_columns2">
        <div class="grid_column_outer1"><slot name="Image" /></div>
        <div class="grid_column_outer2"><slot /></div>
    </div>
</div>

<style>
    .grid_columns {
        display:flex;
    }
    .grid_columns2 {
        --n: 3;
        display: grid;
        width:100%;
        grid-auto-flow: column;
    }
    .grid_column_outer2 {
        width:20em;
    }
    .grid div:first-child {
        grid-area: span var(--n) / span var(--n);
    }

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