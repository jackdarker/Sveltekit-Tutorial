<div class="wrapper" style="display: flex;height: 100vH;">
  <div class="sidebar"><slot name="sidebar" /></div>
  <div style="width: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="horizontal"></div>
  <div class="content"><slot /></div>
  <div class="footer2"><slot name=footer2/></div>
  <div class="footer"><slot name=footer/></div>
  <div class="overlay" hidden>Overlay</div>
</div>

  <style>/* switched from grid to flex because resizer
    ._wrapper{
      min-height: 100vh;
      display: grid;
      grid: "sd sd"
            "main main"
            "main main" 
            "ft ft"
            / 1fr 1fr;
    }
    @media (min-width: 50em) { 
      ._wrapper{
        grid: "sd  main main main"   1fr
              "sd  main main main"  1fr
              "ft2 ft ft ft" min-content
              / 10rem  1fr  1fr  1fr;
        }
    }
    ._footer {
    grid-area: ft;
    }

    ._footer2 {
    grid-area: ft2;
    }

    ._content {
    grid-area: main;
    justify-self_: center;
    }

    ._sidebar {
    grid-area: sd;
    }

    ._wrapper > div.overlay {
    z-index: 10;
    grid-column: main-start / main-end;
    grid-row: hd-start / ft-end;
    border: 4px solid rgb(92, 148, 13);
    background-color: rgba(92, 148, 13, 0.4);
    color: rgb(92, 148, 13);
    font-size: 150%;
    }*/
</style>
