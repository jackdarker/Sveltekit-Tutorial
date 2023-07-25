<div class="wrapper">
    <div class="header"><slot name="header" /></div>
    <div class="sidebar"><slot name="sidebar" /></div>
    <div class="content"><slot /></div>
    <div class="footer"><slot name=footer/></div>
    <div class="overlay" hidden>Overlay</div>
  </div>

  <style>
    .wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
        "hd2 hd2 hd hd   hd   hd   hd   hd   hd"
        "sd sd main main main main main main main"
        "sd sd main main main main main main main"
        "sd sd main main main main main main main"
        "ft ft ft ft   ft   ft   ft   ft   ft";

    }

    .header {
    grid-area: hd;
    }
    .header2 {
    grid-area: hd2;
    }

    .footer {
    grid-area: ft;
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
