import { Button } from '@/shared/components/ui/button'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Challenge = () => {
    const { challengeId } = useParams<string>()



  return (
    <div>
        Challenge {challengeId}
        <Button variant={'bn'} size={'sm'}>
            <Link to={"/"} className='text-blue-700'> home </Link>
        </Button>
    </div>
  )
}


export default Challenge