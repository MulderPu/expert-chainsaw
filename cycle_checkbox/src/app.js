import {div, input, p} from '@cycle/dom'

export function App (sources) {
  const sinks = {
    DOM: sources.DOM.select('input').events('change')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          input({attrs: {type: 'checkbox'}}), 'Toggle Me',
          p(toggled ? 'ON' : 'off')
        ])
      )
  }
  return sinks
}
