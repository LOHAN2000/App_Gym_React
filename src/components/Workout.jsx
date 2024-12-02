import React from 'react'
import { SectionWrapper } from './SectionWrapper'
import { ExcerciseCard } from './ExcerciseCard'

export const Workout = ({ workout }) => {
  console.log(workout)
  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, index) => {
          return(
            <ExcerciseCard exercise={exercise} index={index} key={index}/>
          )
        })}

      </div>
    </SectionWrapper>
  )
}
