import './reset.css'
import * as PIXI from 'pixi.js'

const run = async () => {
  const app = new PIXI.Application()
  await app.init({ background: '#1099bb', resizeTo: window })
  document.body.appendChild(app.canvas)

  const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png')
  const bunny = new PIXI.Sprite(texture)
  bunny.anchor.set(0.5)
  bunny.position.set(app.screen.width / 2, app.screen.height / 2)
  app.stage.addChild(bunny)
}

run()
