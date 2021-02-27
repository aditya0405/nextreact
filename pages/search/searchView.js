import { useRouter } from 'next/router'
import React, { useState } from 'react'

function searchView() {
    const router = useRouter()
    const [value, setValue] = useState(4)
    const [valuekedua, setValuekedua] = useState(4)


    return (
        <div>
            <a onClick={() => router.push('/')}>back to home</a>
            <h1>Adit</h1>
            <h3>{value} + {valuekedua} = {parseInt(value) + parseInt(valuekedua)}</h3>
            <input value={value} onChange={(e) => setValue(e.target.value)}  placeholder="masukkan A" />
            <input value={valuekedua} onChange={(e) => setValuekedua(e.target.value)}  placeholder="masukkan B" />
        </div>
    )
}

export default searchView