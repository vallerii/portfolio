import BackgroundCanvas from '@/ui/wrappers/ThreeCodeBackground';
import ContactMe from './ContactMe';
import Intro from './Intro';
import Projects from './Projects';
import WhatIDo from './WhatIDo';


export default function MainPage() {

  return (
    <div className='flex flex-col items-center pb-[120px] '>
      <BackgroundCanvas />
      <Intro />
      <WhatIDo />
      <Projects />
      <ContactMe />
    </div>
  );
}


