import React from 'react'
import {Text} from 'react-native'
export const Count = ()=>{
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count+1)
    }, 1000)
    return <Text>{count}</Text>
}