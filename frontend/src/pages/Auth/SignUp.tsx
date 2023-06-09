import React from 'react';
import SignUpInput from '../../Components/Auth/SignUpInput';
import GoBackPage from '../../Components/Menu/goBackPage';
import { Head, Line, Title } from '../../styles/Menu/NavStyle';

function SignUp() {
	return (
		<>
			<Head>
				<div className="grid grid-cols-16 gap-1">
					<div className="col-start-2 col-span-2">
						<GoBackPage></GoBackPage>
					</div>
					<div className="col-start-4 col-end-8">
						<Title>회원가입</Title>
					</div>
				</div>
			</Head>
			<Line />
			<SignUpInput></SignUpInput>
		</>
	);
}
export default SignUp;
