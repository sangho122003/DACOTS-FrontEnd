import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../utils/axios';
import '../assets/login.css';

const Login = () => {
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [valueRegister, setValueRegister] = useState({
        name: '',
        born: '',
        ger: '',
        email: '',
        password: '',
        numberPhone: ''
    });

    const [valueLogin, setValueLogin] = useState({
        email: '',
        password: ''
    });

    const handleSignUpClick = () => {
        setIsActive(true);
        setError(null); // Reset error when switching to register
    };

    const handleSignInClick = () => {
        setIsActive(false);
        setError(null); // Reset error when switching to login
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Data to register:', valueRegister); // Kiểm tra dữ liệu gửi đi

        instance.post("/api/register", valueRegister)
            .then(res => {
                if (res.data.status === "success") {
                    alert('Đăng Kí Thành Công');
                    navigate('/login');
                } else {
                    setError("Đăng ký không thành công, vui lòng thử lại.");
                }
            })
            .catch(err => {
                console.error(err);
                setError("Có lỗi xảy ra, vui lòng kiểm tra lại thông tin đăng ký.");
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login data to send:", valueLogin); // Log dữ liệu đăng nhập

        instance.post("/api/login", valueLogin)
        .then(res => {
            console.log("Response from backend:", res); // Log phản hồi từ backend

            if (res.data.Status ==='success' ) {
                console.log('Navigating to /home');
                navigate('/home');
            } else {
                setError("Đăng nhập không thành công, vui lòng kiểm tra lại email và mật khẩu.");
            }
        })
            .catch(err => {
                console.error("Error during login:", err);
                setError("Có lỗi xảy ra, vui lòng kiểm tra lại thông tin đăng nhập.");
            });
    };

    return (
        <div className='container-login'>
            <div className={`page-login ${isActive ? 'active' : ''}`} id="page-login">
                <div className={`form-container sign-up ${isActive ? 'active' : ''}`}>F
                    <form onSubmit={handleRegister}>
                        <h1>Tạo Tài Khoản</h1>
                        <span>or use your email for registration</span>
                        <input
                            type="text"
                            placeholder="Name"
                            value={valueRegister.name}
                            onChange={(e) => setValueRegister({ ...valueRegister, name: e.target.value })}
                            required
                        />
                        <input
                            type="date"
                            placeholder="Birth Date"
                            value={valueRegister.born}
                            onChange={(e) => setValueRegister({ ...valueRegister, born: e.target.value })}
                            required
                        />
                        <div className="gender-selection">
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Man"
                                    onChange={(e) => setValueRegister({ ...valueRegister, ger: e.target.value })}
                                    required
                                />
                                <span className="custom-radio"></span>
                                Nam
                            </label>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Woman"
                                    onChange={(e) => setValueRegister({ ...valueRegister, ger: e.target.value })}
                                    required
                                />
                                <span className="custom-radio"></span>
                                Nữ
                            </label>
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={valueRegister.email}
                            onChange={(e) => setValueRegister({ ...valueRegister, email: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={valueRegister.password}
                            onChange={(e) => setValueRegister({ ...valueRegister, password: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password agian"
                            value={valueRegister.password}
                            onChange={(e) => setValueRegister({ ...valueRegister, password: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Number Phone"
                            value={valueRegister.numberPhone}
                            onChange={(e) => setValueRegister({ ...valueRegister, numberPhone: e.target.value })}
                            required
                        />

                        <button type="submit">Tạo tài Khoản</button>
                    </form>
                </div>

                <div className={`form-container sign-in ${!isActive ? 'active' : ''}`}>
                    <form onSubmit={handleLogin}>
                        <h1>Đăng Nhập</h1>
                        <span>or use your email for password</span>
                        <input
                            type="email"
                            value={valueLogin.email}
                            onChange={(e) => setValueLogin({ ...valueLogin, email: e.target.value })}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            value={valueLogin.password}
                            onChange={(e) => setValueLogin({ ...valueLogin, password: e.target.value })}
                            placeholder="Password"
                            required
                        />
                        <a href="#">Forgot Your Password?</a>
                        <button type="submit">Đăng Nhập</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Tạo Tài Khoản Mới!</h1>
                            <p>Enter your personal details to use all of the site features</p>
                            <button className="hidden" onClick={handleSignInClick}>Đăng Nhập</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Welcome To AVADA!</h1>
                            <h1>{error}</h1>
                            <p>Mạng Xã Hội số 1 Việt Nam</p>
                            <button className="hidden" onClick={handleSignUpClick}>Tạo Tài Khoản</button>
                        </div>
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>} {/* Hiển thị thông báo lỗi */}
            </div>
        </div>
    );
};

export default Login;
