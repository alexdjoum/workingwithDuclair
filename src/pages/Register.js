import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from "../actions/auth"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"

export default function Register() {
    let navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [sex, setSex] = useState('');
    const [status, setStatus] = useState('');
    const [phonenumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //console.log('history ====>', history)

    const handleSubmit = async (e) => {
        //toast.success('Alex Djoum Register successfull, please login');
        e.preventDefault();
        // console.table({ name, email, password });
        try {
            console.log('REGISTER USER ====> ', username);
            let user = new FormData();
            user.append('username', username);
            user.append('sex', sex);
            user.append('status', status);
            user.append('phonenumber', phonenumber);
            user.append('email', email);
            user.append('password', password)
            console.log('user =====>.>>>>', ...user)
            const res = await register(user);
            console.log('res ======= ', res)
            toast.success('Alex Djoum Register successfull, please login');
            navigate("/login")
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) toast.error("erooooooooooooororororor");

        }
    }

    return (
        <>
         		<header className="header">
			{/* <!-- Header Inner --> */}
			<div className="header-inner overlay">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-12">
							{/* <!-- Logo --> */}
							<div className="logo">
								<Link to="/"><img src="images/logo.png" alt="#" /></Link>
							</div>
							{/* <!--/ End Logo --> */}
							<div className="mobile-menu"></div>
						</div>
						<div className="col-lg-9 col-md-9 col-12">
							<div className="menu-bar">
								<nav className="navbar navbar-default">
									<div className="navbar-collapse">
										{/* <!-- Main Menu --> */}
										<ul id="nav" className="nav menu navbar-nav">
											<li className="active"><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
											<li><Link to="#"><i className="fa fa-clone"></i>Pages</Link>
												<ul className="dropdown">
													<li><Link to="/teachers">Teachers</Link></li>
												</ul>
											</li>
											<li><Link to="/teacher"><i className="fa fa-clone"></i>Our Courses</Link></li>
											<li><Link to="/events"><i className="fa fa-bullhorn"></i>Events</Link></li>
											<li><Link to="/contact"><i className="fa fa-address-book"></i>Contact</Link> </li>
										</ul>
										{/* <!-- End Main Menu --> */}
									</div>
								</nav>
								{/* <!-- Search Area --> */}
								<div className="search-area">
									<Link to="#header" className="icon"><i className="fa fa-search"></i></Link>
									<form className="search-form">
										<input type="text" placeholder="ex: premium course" name="search" />
										<button value="search " type="submit"><i className="fa fa-search"></i></button>
									</form>
								</div>
								{/* <!-- End Search Area--> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Header Inner --> */}
		</header>
		{/* <!--/ End Header -->

		<!-- Breadcrumb --> */}
		<div className="breadcrumbs overlay" style={{backgroundImage: "url(" + "images/breadcrumb-bg.jpg" + ")"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<h2>Contact us</h2>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<ul className="bread-list">
							<li><Link to="/">Home<i className="fa fa-angle-right"></i></Link></li>
							<li className="active"><Link to="/contact">contact</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!--/ End Breadcrumb -->

		<!-- Contact Us --> */}
		<section id="contact" className="contact section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-12">
						<div className="section-title bg">
							<h2>Contact <span>Us</span></h2>
							<p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy</p>
							<div className="icon"><i className="fa fa-paper-plane"></i></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-8 col-12">
						<div className="form-head">
							{/* <!-- Contact Form --> */}
							<form className="form" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-user"></i>
											<input 
                                                name="username" 
                                                type="text" 
                                                placeholder="User name"
                                                value={username}
                                                onChange={(e) => setUserName(e.target.value)} 
                                            />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-envelope"></i>
											<input 
                                                name="phonenumber" 
                                                type="number" 
                                                placeholder="Phone number"
                                                value={phonenumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)} />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-envelope"></i>
											<input 
                                                name="email" 
                                                type="email" 
                                                placeholder="Email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-envelope"></i>
											<input 
                                                name="status" 
                                                type="text" 
                                                placeholder="Status"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            />
										</div>
									</div>
                                    <div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-envelope"></i>
											<input 
                                                name="sex" 
                                                type="text" 
                                                placeholder="Sex"
                                                value={sex}
                                                onChange={(e) => setSex(e.target.value)}
                                            />
										</div>
									</div>
									{/* <div className="col-12">
										<div className="form-group message">
											<i className="fa fa-pencil"></i>
											<textarea name="message" placeholder="Type your message"></textarea>
										</div>
									</div> */}
									<div className="col-12">
										<div className="form-group">
											<div className="button">
												<button type="submit" className="btn primary">Send Message</button>
											</div>
										</div>
									</div>
								</div>
							</form>
							{/* <!--/ End Contact Form --> */}
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="contact-right">
							{/* <!-- Contact-Info --> */}
							<div className="contact-info">
								<div className="icon"><i className="fa fa-map"></i></div>
								<h3>Our Collage Location</h3>
								<p>60 Grant ave. Central New Road 0708, United states of America</p>
							</div>
							{/* <!-- Contact-Info --> */}
							<div className="contact-info">
								<div className="icon"><i className="fa fa-envelope"></i></div>
								<h3>contact information</h3>
								<p><Link to="mailto:info@example.com">support@yourwebsite.com</Link></p>
								<p>+123 456-7890</p>
							</div>
							{/* <!-- Contact-Info --> */}
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Contact Us --> */}

		{/* <!-- Clients CSS --> */}
		<div className="clients overlay">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-12">
						<div className="text-content">
							<h4>Our Clients!</h4>
							<p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Et harum quidem</p>
						</div>
					</div>
					<div className="col-lg-8 col-12">
						<div className="client-slider">
							<div className="single-slider">
								<img src="images/client1.png" alt="#" />
							</div>
							<div className="single-slider">
								<img src="images/client2.png" alt="#" />
							</div>
							<div className="single-slider">
								<img src="images/client3.png" alt="#" />
							</div>
							<div className="single-slider">
								<img src="images/client4.png" alt="#" />
							</div>
							<div className="single-slider">
								<img src="images/client5.png" alt="#" />
							</div>
							<div className="single-slider">
								<img src="images/client1.png" alt="#" />
							</div>
							<div className="single-slider">
								<img src="images/client2.png" alt="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>   
        </>
    )
}
