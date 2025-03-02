import axios from 'axios';
import React, { createContext, useState,navigate } from 'react';

// Tạo Context
export const AuthContext = createContext();

// Tạo Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    idUser: '1',
    pic: 'http://localhost:8081/uploads/user.png',
    name: 'Joe',
  });

  // Hàm đăng nhập giả lập
  const login = (idUser, pic, name) => {
    setUser({ idUser, pic, name });
  };

  // Hàm đăng xuất
  const logout = async () => {
   
    try {
        const res = await instance.post("/logout", {});
        
        if (res.status === 200 && res.data.status === "success") {
            setUser({ idUser: null, pic: null, name: null });
            
            navigate('/login');
        } else {
            setError("Đăng xuất không thành công, vui lòng thử lại.");
        }
    } catch (err) {
        console.error("Lỗi đăng xuất:", err);
        setError("Có lỗi xảy ra, vui lòng thử lại sau.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};