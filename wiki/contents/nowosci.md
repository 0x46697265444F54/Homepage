<style>
.page {
  p, ul, ol {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
}

.gray   { --color: gray; }
.green  { --color: rgb(35, 135, 55) }
.yellow { --color: rgb(195, 135, 0) }
.red    { --color: rgb(226, 64, 64) }

blockquote:not(sup) {
  padding: 16px 16px 16px 16px !important;
  border-radius: 8px !important;
  border: 1px solid color-mix(in srgb, var(--color), transparent 90%) !important;
  background-color: color-mix(in srgb, var(--color), transparent 90%) !important;

  i {
    font-size: 14px;
    margin: 0 8px 0 4px;
  }

  li {
    color: color-mix(in srgb, var(--color-text), transparent 20%);
  }

  strong, h5 {
    color: color-mix(in srgb, var(--color), var(--color-text) 20%) !important;
  }

  a {
    color: color-mix(in srgb, var(--color), var(--color-text) 20%) !important;
  }

  a:hover {
    opacity: 0.75 !important;
    transition: 0.3s;
  }

  h5:has(i) {
    user-select: none;
    pointer-events: none;
    padding-bottom: 8px;
    margin-left: -8px !important;
  }

  h5::selection {
    text-decoration: none !important;
  }

}

.separator {
  user-select: none;
  display: flex;
  margin: 2.5em 0;
  font-size: var(--font-size-l);
  line-height: var(--font-size-l);
  color: var(--color-mono-3);
}

.separator:before, .separator:after {
  content: '';
  flex-grow: 1;
  background: var(--color-mono-2);
  height: 1px;
  margin: 0.5em 1em;
}

</style>

# Nowości
Historia zmian wprowadzonych na serwer podczas trwania obecnego sezonu. Lista aktualizowana jest zwykle raz w miesiącu lub przed większą aktualizacją.  
Jeżeli interesują Cię najświeższe zmiany, znajdują się one na kanale **#changelog** na naszym serwerze Discord.

<br>

<div class="page">

  <!-------------------------------------------------------->
  <h4 class="separator" id="01-01-2026">1 Stycznia, 2026</h4>
  <!-------------------------------------------------------->

  <div class="gray">

  > ...

  </div>
  <div class="green">

  > ##### <i class="si new"></i> NOWOŚCI
  > - ...

  </div>
  <div class="yellow">
  
  > ##### <i class="si changed"></i> ZMIANY
  > - ...
  
  </div>
  <div class="red">
  
  > ##### <i class="si fixed"></i> POPRAWKI
  > - ...

  </div>

</div>