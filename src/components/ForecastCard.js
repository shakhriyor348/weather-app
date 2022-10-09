import React from 'react';
import WeatherPictureImg from "./WeatherPictureImg";
import styles from './ForecastCard.module.scss'

const ForecastCard = (props) => {

    const {data} = props

    function click(){
        props.click(data)
    }

    const style = () => {
        return props.current.dayDate === props.data.dayDate ? styles['forecast green'] : styles['forecast']
    }

    return (
        <div className={style()} onClick={click}>
            <div className={styles['forecast--day']}>{
                data.dayDate.replace(' 2022', '')
            }</div>
            <div className={styles['forecast--dayOfWeek']}>{data.dayOfWeek}</div>
            <WeatherPictureImg
                class={styles['forecast--picture']}
                currentWeather={data.averageWeather}
                currentTypeWeather={data.averageTypeWeather}
                time={"12:00"}
            />
            <div className={styles['forecast--temp']}>{
                data.averageTemp
            }°С</div>
        </div>
    );
};

export default ForecastCard;