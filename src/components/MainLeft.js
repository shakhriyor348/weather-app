import React from 'react';
import styles from './MainLeft.module.scss'
import wind from '../images/wind.svg'
import rain from '../images/rain.svg'
import hum from '../images/hum.svg'
import ForecastCard from "./ForecastCard";
import Search from "./Search/Search";
import WeatherPictureImg from "./WeatherPictureImg";

const isUndef = (obj) => {
    if (typeof obj !== 'undefined') return obj
    else return ''
}


const getCards = (array, click, current) => {

    let i=0;
    return array.map(obj =>
        <ForecastCard
            data={obj}
            click={click}
            key={i++}
            current={current}
            />
    )
}

const getTime = () => {
    const now = new Date()
    const minutes = now.getMinutes() >= 10? now.getMinutes() : `0${now.getMinutes()}`
    return `${now.getHours()}:${minutes}`
}

const MainLeft = (props) => {
    const conditionalRender = () => {
        if (props.data.length !== 0) return (
                <div>
                <div className={styles['weather--main']}>
                    <h1 className={styles['degrees']}>{Math.round(props.data[0].hourlyData[0].main.temp - 273)}
                        <div className={styles['celsium-holder']}>
                        <span className={styles['symbol']}>°</span>
                        <span className={styles['celsium']}>С</span>
                        </div>
                    </h1>
                    <WeatherPictureImg
                        currentWeather={props.data[0].hourlyData[0].weather[0].main}
                        currentTypeWeather = {props.data[0].hourlyData[0].weather[0].description}
                        time={props.data[0].hourlyData[0].hours}
                        class={styles['main--picture']}
                    />

                </div>
                    <h1 className={styles['weather--city']}>{props.city}</h1>

                <div className={styles['adaptive--degrees']}>
                    <div className={styles['adaptive--degrees-left']}>
                        <h4 className={styles['date']}>{props.data[0].dayDate}</h4>
                        <div className={styles['daytime']}>
                            <h4 className={styles['day']}>{props.data[0].dayOfWeek}</h4>
                            <h3 className={styles['time']}>{getTime()}</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['additional']}>
                    <div className={styles['additional--block']}>
                        <img src={wind} className={styles['additional--img']} />
                        <span>Wind {props.data[0].hourlyData[0].wind.speed} km/h</span>
                    </div>
                    <div className={styles['break']}>|</div>
                    <div className={styles['additional--block']}>
                        <img src={hum} className={styles['additional--img']}/>
                        <span>Hum {props.data[0].hourlyData[0].main.humidity} %</span>
                    </div>
                    <div className={styles['break']}>|</div>
                    <div className={styles['additional--block']} >
                        <img src={rain} className={styles['additional--img']}/>
                        <span>Rain {props.data[0].hourlyData[0]['pop']*100} %</span>
                    </div>
                </div>
                <div className={styles['cardsholder']}>
                    {getCards
                        (
                            props.data,
                            props.changeForecast,
                            props.current
                        )
                    }
                </div>
                </div>)
    }
    return (
    <div className={styles['main--left']}>
        <Search
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
            error={props.error}
        />
        {
            conditionalRender()
        }
    </div>)
};

export default MainLeft;