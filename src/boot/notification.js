import { Notify } from 'quasar'


Notify.setDefaults({
  timeout: 1500,
  textColor: 'white',
  actions: [{ icon: 'close', color: 'white' }]
})

Notify.registerType('error', {
  icon: 'mdi-alert-circle',
  progress: true,
  color: 'negative',
  message: 'Erro não catalogado'
})

Notify.registerType('success', {
  icon: 'mdi-check',
  progress: true,
  color: 'positive',
  message: 'Operação realizada com sucesso'
})