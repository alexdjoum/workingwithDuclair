import React from 'react'
import { Link } from 'react-router-dom'

function Teacher() {
    return (
        <div>
            {/* <!-- Header --> */}
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
											<li className="active"><a href="index.html"><i className="fa fa-home"></i>Home</a></li>
											<li><Link to="#"><i className="fa fa-clone"></i>Pages</Link>
												<ul className="dropdown">
													<li><Link to="/teacher">Teachers</Link></li>
												</ul>
											</li>
											<li><Link to="courses.html"><i className="fa fa-clone"></i>Our Courses</Link></li>
											<li><Link to="/events"><i className="fa fa-bullhorn"></i>Events</Link></li>
											<li><Link to="/contact"><i className="fa fa-address-book"></i>Contact</Link> </li>
										</ul>
										{/* <!-- End Main Menu --> */}
									</div>
								</nav>
								{/* <!-- Search Area --> */}
								<div className="search-area">
									<a href="#header" className="icon"><i className="fa fa-search"></i></a>
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
		{/* <!--/ End Header --> */}

		{/* <!-- Breadcrumb --> */}
		<div className="breadcrumbs overlay" style={{ backgroundImage: 'url(' + 'images/breadcrumb-bg.jpg' + ")"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<h2>Our Teachers</h2>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<ul className="bread-list">
							<li><Link to="/">Home<i className="fa fa-angle-right"></i></Link></li>
							<li><a href="#">Pages<i className="fa fa-angle-right"></i></a></li>
							<li className="active"><Link to="about.html">About</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!--/ End Breadcrumb -->

		<!-- Teachers --> */}
		<section className="teachers archive section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-12">
						<div className="section-title bg">
							<h2>Our <span>Advisors</span></h2>
							<p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy</p>
							<div className="icon"><i className="fa fa-users"></i></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Teacher --> */}
						<div className="single-teacher">
							<div className="teacher-head overlay">
								<img src="images/teachers/teacher-1.jpg" alt="#" />
								<ul className="social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								</ul>
							</div>
							<div className="teacher-content">
								<h4>Rohan Jonson<span>Web Developer</span></h4>
							</div>
						</div>
						{/* <!--/ End Single Teacher --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Teacher --> */}
						<div className="single-teacher">
							<div className="teacher-head overlay">
								<img src="images/teachers/teacher-2.jpg" alt="#" />
								<ul className="social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								</ul>
							</div>
							<div className="teacher-content">
								<h4>Katheing William<span>Software Developer</span></h4>
							</div>
						</div>
						{/* <!--/ End Single Teacher --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Teacher --> */}
						<div className="single-teacher">
							<div className="teacher-head overlay">
								<img src="images/teachers/teacher-3.jpg" alt="#" />
								<ul className="social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								</ul>
							</div>
							<div className="teacher-content">
								<h4>William Holex<span>Civil Engineer</span></h4>
							</div>
						</div>
						{/* <!--/ End Single Teacher --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Teacher --> */}
							<div className="single-teacher">
							<div className="teacher-head overlay">
								<img src="images/teachers/teacher-4.jpg" alt="#" />
								<ul className="social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								</ul>
							</div>
							<div className="teacher-content">
								<h4>Boamia Rone<span>Ui Designer</span></h4>
							</div>
						</div>
						{/* <!--/ End Single Teacher --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Teacher --> */}
						<div className="single-teacher">
							<div className="teacher-head overlay">
								<img src="images/teachers/teacher-1.jpg" alt="#" />
								<ul className="social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								</ul>
							</div>
							<div className="teacher-content">
								<h4>Rohan Jonson<span>Web Developer</span></h4>
							</div>
						</div>
						{/* <!--/ End Single Teacher --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Teacher --> */}
						<div className="single-teacher">
							<div className="teacher-head overlay">
								<img src="images/teachers/teacher-2.jpg" alt="#" />
								<ul className="social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								</ul>
							</div>
							<div className="teacher-content">
								<h4>Katheing William<span>Software Developer</span></h4>
							</div>
						</div>
						{/* <!--/ End Single Teacher --> */}
					</div>
				</div>
			</div>
		</section>
		
        </div>
    )
}

export default Teacher
