const { readdirSync } = require('fs')

module.exports = (client) => {
  const load = dirs => {
    const events = readdirSync(`./eventos/${dirs}/`).filter(f => f.endsWith('.js'))

    for (let file of events) {
      const event = require(`../eventos/${dirs}/${file}`)
      let eventName = file.split(".")[0]

      client.on(eventName, event.bind(null, client))
      
    }
  }
  readdirSync(`./eventos/`).forEach(x => load(x))
}