export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key, params = {}) =>
      // en.hi => ['en', 'hi'] // en.welcome => ['en', 'welcome']
      key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i] //'환영합니다. {name}님.'
        }, options)
        .replace(/{\w+}/g, (match) => params[match.slice(1, -1)]) // '환영합니다. John Doe님.'
  }
}

// {name} ==> name

// {
//   en: {
//     hi: 'Hello',
//     search: 'Search',
//     save: 'Save'
//   },
//   ko: {
//     hi: '안녕하세요',
//     search: '조회',
//     save: '저장'
//   }
// }
