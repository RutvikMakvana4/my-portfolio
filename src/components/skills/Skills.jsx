import React from 'react'
import { skills } from '../../utils/data';
import Title from '../layouts/Title'

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY CODING SKILLS"
          des="My Skills"
        />
      </div>
    </section>
  );

}


export default Skills