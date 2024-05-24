import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SidebarItem from "../Component/SideBarItem/SideBarItem";
import "./Layout.css";
import ModalLogout from "../Component/ModalLogout/ModalLogout";
import { auth } from "../Auth/firebase";
import { signOut } from "firebase/auth";

function Layout({ children, titlePage }) {
    const navigate = useNavigate();

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutConfirm = async () => {
        try {
            await signOut(auth);
            console.log('user successfully logged out');
            navigate('/login');
        } catch (error) {
            console.log('error during logout:', error);
            alert(error.message)
        }
    };

    const handleLogoutCancel = () => {
        setShowLogoutModal(false);
    };

    return (
        <>
            <div className="sidebar">
                <div className="offcanvass offcanvas-start ">
                    <div className="offcanvas-header d-flex justify-content-center">
                        {/* <img src={image.adminLogo} alt="" />
                        <img src={image.adminLogo} alt="" /> */}
                    </div>
                    <hr className="p-0 m-0" />
                    <div className="offcanvass-body d-grid  align-items-stretch ">
                        <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0 ">
                            <SidebarItem
                                icon={<i className='bx bxs-dashboard bx-sm bx-tada-hover'></i>}
                                title="Dashboard"
                                location="/admin"
                            />

                            <SidebarItem
                                icon={<i className='bx bxs-bank bx-sm bx-tada-hover'></i>}
                                title="Kelola Artikel"
                                location="/admin/kelola-artikel"
                            />

                            <SidebarItem
                                icon={<i className='bx bxs-bank'></i>}
                                title="Logout"
                                location="#"
                                onClick={handleLogoutClick}
                            />
                            <hr className="p-0 m-0" />
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                <div className="container-fluid p-2">
                    <div className="row">
                        <div className="col">
                            <nav
                                id="navbar"
                                className="navbar bg-transparant d-flex align-items-center justify-content-between"
                            >
                                <h2 className="fw-semibold">{titlePage}</h2>
                            </nav>
                        </div>
                    </div>
                </div>
                {children}

                <ModalLogout
                    show={showLogoutModal}
                    title="Logout"
                    onClose={handleLogoutCancel}
                    onSubmit={handleLogoutConfirm}
                />
            </main>
        </>
    );
}

export default Layout; 