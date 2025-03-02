import { useState, useEffect } from 'react';
import '../assets/wheather.css';

const Weather = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [location, setLocation] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundClass, setBackgroundClass] = useState('bg-sun'); // Quản lý hình nền

  const toggleWeather = () => {
    setIsVisible(!isVisible);
  };

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    setCurrentTime(timeString);

    // Thay đổi hình nền dựa trên giờ
    if (hours >= 6 && hours < 18) {
      setBackgroundClass('bg-sun'); // Ban ngày
    } else {
      setBackgroundClass('bg-night'); // Ban đêm
    }
  };

  const getLocationFromCoordinates = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      const city =
        data.address.city ||
        data.address.town ||
        data.address.village ||
        'Không xác định';
      const country = data.address.country || 'Không xác định';
      setLocation(`${city}, ${country}`);
    } catch (error) {
      console.error('Không thể lấy thông tin vị trí:', error);
      setLocation('Không xác định');
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getLocationFromCoordinates(lat, lon);
        },
        () => {
          alert(
            'Không thể lấy vị trí của bạn. Vui lòng cấp quyền truy cập vị trí.'
          );
        }
      );
    } else {
      alert('Trình duyệt của bạn không hỗ trợ Geolocation.');
    }
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="container-weather">
      <div className={`hide ${backgroundClass}`} onClick={toggleWeather}>
        <h1 className="title-weather">AVADA</h1>
        <p className="date-location">
          {currentTime} {location}
        </p>
      </div>
      <div className={`list-weather ${isVisible ? 'show' : ''}`}></div>
    </div>
  );
};

export default Weather;
  