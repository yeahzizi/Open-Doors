import { Ul, Li, Image, MenuImg, Line } from '../../styles/Menu/styles';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import basicimg from '../../assets/img/basicimg.png';
import { logout } from '../../store/Cookie';
import { logoutAccount } from '../../store/AuthSlice';
import axios from 'axios';
import '../../styles/Menu/RightNav.css';
import mylocation from '../../assets/img/recomendation.png';
import registermap from '../../assets/img/myinfomanage.png';
import donation from '../../assets/img/donation.png';
import help from '../../assets/img/help.png';
import logoutImg from '../../assets/img/logout.png';
import loginImg from '../../assets/img/loginImg.png';

type Props = {
	open: boolean;
};

type UserState = {
	user: {
		userImg: string;
	};
};

function RightNav(props: Props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const LogoutHandler = () => {
		dispatch(logoutAccount());
		logout();
		axios
			.get('/api/users/logout', {
				headers: { Authorization: `Bearer ${accessToken}` },
			})
			.then((res) => console.log(res.data));
	};
	const LoginHandler = () => {
		navigate('/Login');
	};
	const accessToken = localStorage.getItem('accessToken');
	const username = localStorage.getItem('username');
	const [myImage, setMyImage] = useState(`${basicimg}`);
	return (
		<>
			<Ul open={props.open}>
				<MenuImg>
					<Image src={myImage} alt="my-image" />
					<p>{username}</p>
				</MenuImg>
				<NavLink
					to="/myloc"
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : '',
						color: isActive ? '#0DADEA' : '',
					})}
				>
					<Li className="flex items-center">
						<img className="menubarIcon" src={mylocation} alt="myloc" />
						내가 등록한 장소
					</Li>
				</NavLink>
				<NavLink
					to="/map/newlocation"
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : '',
						color: isActive ? '#0DADEA' : '',
					})}
				>
					<Li className="flex items-center">
						<img className="menubarIcon" src={registermap} alt="regimap" />
						장소 등록하기
					</Li>
				</NavLink>
				<NavLink
					to="/donation"
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : '',
						color: isActive ? '#0DADEA' : '',
					})}
				>
					<Li className="flex items-center">
						<img className="menubarIcon" src={donation} alt="donation" />
						기부하기
					</Li>
				</NavLink>
				<NavLink
					to="/help"
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : '',
						color: isActive ? '#0DADEA' : '',
					})}
				>
					<Li className="flex items-center">
						<img className="menubarIcon" src={help} alt="help" />
						문의하기
					</Li>
				</NavLink>
				<div className="loginout">
					<Line />
					{accessToken ? (
						<Li onClick={LogoutHandler} className="flex items-center">
							<img className="menubarIcon" src={logoutImg} alt="logout" />
							로그아웃
						</Li>
					) : (
						<Li onClick={LoginHandler} className="flex items-center">
							<img className="menubarIcon" src={loginImg} alt="login" />
							로그인
						</Li>
					)}
				</div>
			</Ul>

			{/* <Routes>
				<Route path="/myloc" />
				<Route path="/map/newlocation" />
				<Route path="/donation" />
				<Route path="/help" />
			</Routes> */}
		</>
	);
}

export default RightNav;