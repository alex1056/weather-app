import { useState, useEffect } from 'react';
import s from './show-weather.module.scss';
import { Button } from '../Button';
import { connector } from './container';

const ShowWeather = (props) => {
  const { loadByCity, loadByCoords, weatherCitiesAndCoords, removePoint } =
    props;
  let startPointLat = null;
  let startPointLon = null;
  const [cityInputValue, setCityInputValue] = useState('London');
  const [latInputValue, setLatInputValue] = useState('55.75501');
  const [lonInputValue, setLongInputValue] = useState('37.40543');

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        startPointLat = Math.floor(crd.latitude * 10000) / 10000;
        startPointLon = Math.floor(crd.longitude * 10000) / 10000;
        loadByCoords({
          lat: Math.floor(startPointLat * 10000) / 10000,
          lon: Math.floor(startPointLon * 10000) / 10000,
        });
        setLatInputValue(startPointLat);
        setLongInputValue(startPointLon);
      },
      error,
      options,
    );
  }, []);

  const handleChange = (e) => {
    setCityInputValue(e.target.value);
  };

  const handleChangeLat = (e) => {
    setLatInputValue(e.target.value);
  };

  const handleChangeLon = (e) => {
    setLongInputValue(e.target.value);
  };

  const handleClickCity = (e) => {
    e.preventDefault();
    if (cityInputValue) {
      loadByCity({ city: cityInputValue });
    }
  };

  const handleClickCoords = (e) => {
    e.preventDefault();
    if (latInputValue && lonInputValue) {
      loadByCoords({
        lat: Math.floor(latInputValue * 10000) / 10000,
        lon: Math.floor(lonInputValue * 10000) / 10000,
      });
    }
  };

  function handleClickRemove() {
    removePoint(this);
  }

  return (
    <>
      <div className={s.container}>
        <form className={s.cityForm} id='form_city' onSubmit={handleClickCity}>
          <div className={s.inputWrapper}>
            <input
              value={cityInputValue}
              onChange={handleChange}
              placeholder='Город'
              name='city'
              className={s.message}
            />
          </div>

          <Button
            styleType='contained'
            size='dense'
            type='submit'
            text='Загрузить по городу'
          />
        </form>

        <form
          className={s.cityForm}
          id='form_coords'
          onSubmit={handleClickCoords}
        >
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor='lat'>
              lat
            </label>
            <input
              value={latInputValue}
              onChange={handleChangeLat}
              placeholder='Lat'
              name='lat'
              className={s.input}
            />
            <label className={s.label} htmlFor='lon'>
              lon
            </label>
            <input
              value={lonInputValue}
              onChange={handleChangeLon}
              placeholder='Lon'
              name='lon'
              className={s.input}
            />
          </div>
          <div className={s.btnForm}>
            <Button
              styleType='contained'
              size='dense'
              type='submit'
              text='Загрузить по координатам'
            />
          </div>
        </form>

        <div>
          {Object.keys(weatherCitiesAndCoords).map((point) => (
            <div key={point} className={s.point}>
              <p className={s.pointTitle}>{point} </p>
              <p className={s.forJSON}>
                {JSON.stringify(weatherCitiesAndCoords[point])}
              </p>
              <div className={s.removeBtn}>
                <Button
                  styleType='contained'
                  type='submit'
                  text='Удалить'
                  size='dense'
                  onClick={handleClickRemove.bind({ point })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default connector(ShowWeather);
