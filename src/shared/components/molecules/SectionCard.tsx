import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

interface Props {
    title: string,
    text: string
}
export default function SectionCard({title,text}: Props) {
  return (
    <div className='ds-bg flex flex-col gap-3 !p-3 rounded-lg text-center shadow-md '   >
        <Title className=' text-2xl font-bold' variant='main' >{title}</Title>
        <Text className='text-muted' size='xs'>{text}</Text>
    </div>
  )
}
