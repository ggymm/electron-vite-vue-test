import fetch from 'node-fetch'

/**
 * https://translate.yandex.com/
 */
export class YandexTranslate {
  sid: string

  constructor() {
    console.log('YandexTranslate')
  }

  public getSid() {
    // 获取网页
    fetch('https://translate.yandex.com/').then(async (res) => {
      const body = await res.text()

      const match = body.match(/Ya.reqid = '[0-9a-f.]+/)
      if (match && match[0]) {
        this.sid = match[0].replace('Ya.reqid = ', '')
      }

      console.log(this.sid)
    })
  }
}
