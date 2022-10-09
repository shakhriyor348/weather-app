import styles from './App.module.scss';
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import getData from "./data";
import React, {useEffect, useState} from "react";

function App() {

    const [list, setList] = useState([])
    const [currentForecast, setCurrentForecast] = useState({})
    const [city, setCity] = useState('Moscow')
    const [searchValue, setSearchValue] = useState('Tashkent')
    const [error, setError] = useState('')
    const handleForecast = (data) => {
        setCurrentForecast({})

        setTimeout(()=>setCurrentForecast(data),0)
    }


   useEffect(() => {
        getData(setList,searchValue, setCity, setCurrentForecast, setError)
    }, [searchValue])

   

    const conditionalRender = () => {
        return list.length !== 0
            ?
            <>
            <MainLeft
                city={city}
                data={list}
                changeForecast={handleForecast}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                current={currentForecast}
                error={error}
                 
            />
            <MainRight forecast={currentForecast}/>
            </>
            : <></>

    }
  return (

    <div className={styles['main']}>

        {conditionalRender()}
        <div className={styles['right--whiter']}>
        </div>
    </div>
  );
}

export default App;
