declare module '*.svg?component' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component&svgo' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component&svgo=false' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component&svgo=true' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=template' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=template&svgo' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=template&svgo=false' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=template&svgo=true' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=jsx' {
  const src: () => any
  export default src
}

declare module '*.svg?component=jsx&svgo' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=jsx&svgo=false' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?component=jsx&svgo=true' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'

  const src: FunctionalComponent<SVGAttributes>
  export default src
}

declare module '*.svg?raw' {
  const src: string
  export default src
}