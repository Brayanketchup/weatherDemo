import react from 'react'

export default function NavBar() {

    return (
        <>
            <header className='w-full h-20 text-4xl inline-flex flex-row justify-between px-10 pt-2 text-zinc-100'>
                <div>
                    Weather App
                </div>
                <ul className='inline-flex flex-row justify-around'>
                    <li className='mx-2 text-xl'><a href=""></a>Today</li>
                    <li className='mx-2 text-xl'><a href=""></a>Tommorrow</li>
                    <li className='mx-2 text-xl'><a href=""></a>Extra</li>
                </ul>
            </header>
        </>

    )
}

