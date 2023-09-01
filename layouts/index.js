import dynamic from 'next/dynamic'

const layouts = {
  Home: dynamic(() => import(`@/layouts/Home`)),
  About: dynamic(() => import(`@/layouts/About`)),
  Contact: dynamic(() => import(`@/layouts/Contact`)),
  Services: dynamic(() => import(`@/layouts/Services`)),
  Post: dynamic(() => import(`@/layouts/Post`)),
  Blog: dynamic(() => import(`@/layouts/Blog`)),
  Projects: dynamic(() => import(`@/layouts/Projects`)),
  Fallback: dynamic(() => import(`@/layouts/Fallback`)),
  Blank: dynamic(() => import(`@/layouts/Blank`)),
  BlankCenter: dynamic(() => import(`@/layouts/BlankCenter`)),
}

export default layouts
