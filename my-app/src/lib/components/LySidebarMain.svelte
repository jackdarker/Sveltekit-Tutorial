<div class="wrapper">
    <div class="header2"><slot name="header2" /></div>
    <div class="sidebar"><slot name="sidebar" /></div>
    <div class="content"><slot /></div>
    <div class="overlay" hidden>Overlay</div>
  </div>

  <style>
    .wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
        "hd2 hd2 main main main main main main main"
        "sd sd main main main main main main main"
        "sd sd main main main main main main main"
        "sd sd main main main main main main main";

    }

    .header2 {
    grid-area: hd2;
    }

    .content {
    grid-area: main;
    justify-self_: center;
    }

    .sidebar {
    grid-area: sd;
    }

    .wrapper > div.overlay {
    z-index: 10;
    grid-column: main-start / main-end;
    grid-row: hd-start / ft-end;
    border: 4px solid rgb(92, 148, 13);
    background-color: rgba(92, 148, 13, 0.4);
    color: rgb(92, 148, 13);
    font-size: 150%;
    }
</style>
