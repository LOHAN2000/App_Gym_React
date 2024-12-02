import React, { useState } from 'react'
import { SectionWrapper } from './SectionWrapper'
import { WORKOUTS, SCHEMES } from './utils/swoldier'
import { Button } from './Button'

const Header = ({ index, title, description }) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
        <p className='text-xl sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export const Generator = ({poison, setPoison, muscles, setMuscles, goals, setGoals, updateWorkout}) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const updateMuscles = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }
    if (muscles.length > 3) {
      return
    }
    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }
    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      setShowModal(false)
    }
  }
  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure.'}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.entries(WORKOUTS).map(([key, value]) => {
          return(
              <button onClick={() => {setPoison(key)}} className={'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 ' + (key === poison ? 'border-blue-600': 'border-blue-400')} key={key}><p className='capitalize'>{key.replaceAll('_', " ")}</p></button>
            )
        })}
      </div>
      <Header index={'02'} title={'Lock on Targets'} description={'Select the muscles judged for annihilation'}/>
      <div className='bg-slate-950 border border-solid boder-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p className='capitalize'>{muscles.length === 0 ? 'Select muscles groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col  px-3 pb-3'>{(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
            return (
            <button onClick={() => updateMuscles(muscleGroup)} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : ' ')} key={muscleGroupIndex}>
              <p className='uppercase'>{muscleGroup.replaceAll('_', "")}</p>  
            </button>)
          })}</div>
        )}
      </div>
      <Header index={'03'} title={'Become Juggernout'} description={'Select your ultimate objective'}/>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.entries(SCHEMES).map(([key, value]) => {
          return(
            <button onClick={() => {setGoals(key)}} className={'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 ' + (key === goals ? 'border-blue-600': 'border-blue-400')} key={key}><p className='capitalize'>{key.replaceAll('_', " ")}</p></button>
          )
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"}/>
    </SectionWrapper>
  )
}
