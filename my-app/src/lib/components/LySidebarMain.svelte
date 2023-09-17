<div class="wrapper">
  <div class="sidebar"><slot name="sidebar" /></div>
  <div class="content"><slot /></div>
  <div class="footer2"><slot name=footer2/></div>
  <div class="footer"><slot name=footer/></div>
  <div class="overlay" hidden>Overlay</div>
</div>

  <style>
    .wrapper{
      min-height: 100vh;
      display: grid;
      grid: "sd sd"
            "main main"
            "main main" 
            "ft ft"
            / 1fr 1fr;
    }
    @media (min-width: 50em) { 
      .wrapper{
        grid: "sd  main main main"   1fr
              "sd  main main main"  1fr
              "ft2 ft ft ft" min-content
              / 10rem  1fr  1fr  1fr;
        }
    }
    .footer {
    grid-area: ft;
    }

    .footer2 {
    grid-area: ft2;
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
