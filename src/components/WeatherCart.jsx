import React from 'react';
import styles from './WeatherCart.module.scss'
import wind from '../images/wind.svg'
import rain from '../images/rain.svg'
import WeatherPictureImg from "./WeatherPictureImg";

const WeatherCart = (props) => {
    return (
        <div className={styles['WeatherCart']}>
            <div className={styles['container']}>
                <div className={styles['WeatherCart_content']}>
                    <div className={styles['adaptive--column left']}>
                            <div className={styles['WeatherCart_time']}>
                                {props.hours}
                            </div>
                            <div className={styles['weathercart--temp']}>
                                <span>{props.temp}°С</span>
                            </div>
                    </div>
                    <WeatherPictureImg
                        currentWeather={props.weather}
                        currentTypeWeather={props.typeweather}
                        time={props.hours}
                        class={styles['weathercart--picture']}
                    />
                    <div className={styles['adaptive--column right']}>
                        <div className={styles['cont']}>
                        <div className={styles['wind-speed']}>
                            <img src={wind} className={styles['weathercart--wind']} />
                            {` ${props.speed}`}
                        </div>
                        <div className={styles['rain-prob']}>
                            <img src={rain} className={styles['weathercart--wind']} />
                            {` ${Math.round(props.rain*100)}`}%
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCart;
