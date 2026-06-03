'use client';

import CommerticalProjects from './CommerticalProjects';
import MyProjects from './MyProjects';

export default function AllProjectsPage() {
  return (
    <div className='flex flex-col gap-120'>
      <CommerticalProjects/>
      <MyProjects/>
    </div>
  );
}



