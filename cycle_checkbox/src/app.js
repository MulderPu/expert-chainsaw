import {div, input, p, h4, small} from '@cycle/dom'

export function App (sources) {
  const vtree$ = sources.DOM.select('input').events('change')
      .map(ev => ev.target.checked)
      .startWith(true)
      .debug('i am here:')
      .map(toggled =>
        div({attrs: {class: 'container'}}, [
          input({attrs: {type: 'checkbox', checked: toggled}}), 'Toggle Me',
          p(toggled ? 'On' : 'Off'),
          div([
            h4('something'),
            small('haha')
          ])
        ])
      )

  const sinks = {
    DOM: vtree$
  }

  return sinks
}
