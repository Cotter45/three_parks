import { Suspense, useEffect, useRef, useMemo, useState } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./text"
import Plane from "./plane"
import { Block, useBlock } from "./blocks"
import state from "./parks"
import Map from "./map"

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#D40749" : "#2FE8C3"
  return (
    <Block factor={mobile ? factor / 1.25 : factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Html
          style={{ width: pixelWidth / (mobile ? 1 : 1), textAlign: left ? "left" : "right" }}
          position={[left || mobile ? (-w * size) / 2 : -6, (-w * size) / 2 / aspect - 0.4, 1]}>
          <div style={{ color: 'white' }} tabIndex={index}>{text}</div>
        </Html>
        <Html
          style={{ width: pixelWidth / (mobile ? 1 : 1), textAlign: left ? "left" : "right", fontSize: mobile ? '1.5rem' : '2.5rem', color }}
          position={[left || mobile ? (-w * size) / 2 : -6, mobile ? (w * size) / aspect - .15 : (w * size) / aspect - 2, 1]}>
          <h3 tabIndex={index}>{header}</h3>
        </Html>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color={color} position={[mobile ? ((left ? w : -w) / 2) * size : ((left ? w : -w) / 1.5) * size, mobile ? (w * size) / aspect - .75 : (w * size) / aspect - 4, -10]}>
            {(index + 1).toString()}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * .2} position={[-w / 2.5, 2, -1]} color="#2FE8C3">
            U.S.
          </Text>
          <Text left size={w / 15} position={[-w / 2.2, -1, -1]} color="white">
            National Parks
          </Text>
        </Block>
        <Block factor={1.0}>
          <Html
          style={{ width: '100vw', textAlign: 'center' }}
          position={[mobile ? -w / 1.5 : -w / 2, mobile ? -w / 2 : -w / 5, 1]}>
          <div>A curated list of wanderlust</div>
        </Html>
        </Block>
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
    </>
  )
}

function Three() {
  const scrollArea = useRef();
  const [current, setCurrent] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  const onScroll = (e) => {
    state.top.current = e.target.scrollTop;
    setCurrent(e.target.scrollTop);
    setScrollHeight(e.target.scrollHeight);
  }
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Html center className="loading" children="Loading..." />}>
          <Content />
          <Startup />
        </Suspense>
      </Canvas>
      <Map current={current} scrollHeight={scrollHeight} />
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100.1}vh` }}>
          </div>
        ))}
      </div>
    </>
  )
}

export default Three;
