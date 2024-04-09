import './reset.css'
import * as PIXI from 'pixi.js'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'

/**
 * * PixiJS
 *   * https://pixijs.com/8.x/tutorials/getting-started#1
 * * PixiPlugin GSAP
 *   * https://gsap.com/docs/v3/Plugins/PixiPlugin/
 */
const run = async () => {
  gsap.registerPlugin(PixiPlugin)
  PixiPlugin.registerPIXI(PIXI)

  const app = new PIXI.Application()
  await app.init({ background: '#1099bb', resizeTo: window })
  document.body.appendChild(app.canvas)

  const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png')
  const bunny = new PIXI.Sprite(texture)
  bunny.anchor.set(0.5)
  bunny.position.set(app.screen.width / 2, app.screen.height / 2)
  app.stage.addChild(bunny)

  const btnContainer = new PIXI.Container()
  btnContainer.interactive = true
  const btnGraphics = new PIXI.Graphics()
  const btnText = new PIXI.Text({
    text: 'CLICK!',
    style: {
      fill: 0xffffff,
      fontFamily: 'sans-serif',
      fontSize: '32px',
      fontWeight: '900'
    }
  })
  btnGraphics.rect(0, 0, 200, 60).fill('#02706a')
  btnText.anchor.set(0.5)
  btnText.position.set(100, 30)
  btnContainer.addChild(btnGraphics, btnText)
  btnContainer.position.set(
    app.screen.width / 2 - 100,
    app.screen.height / 2 + 40
  )
  app.stage.addChild(btnContainer)

  btnContainer.addEventListener('click', () => {
    const timeline = gsap.timeline({ defaults: { duration: 2 } })
    timeline
      .to(bunny, { pixi: { colorize: 'red', colorizeAmount: 1 } })
      .to(bunny, { pixi: { hue: 180 } })
      .to(bunny, { pixi: { saturation: 0 } })
      .to(bunny, { pixi: { brightness: 2 } })
      .to(bunny, { pixi: { contrast: 1.5 } })
  })
}

run()
