import React from 'react'
import { Link } from "react-router-dom"

export default function Events() {
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
											<li><a href="#"><i className="fa fa-clone"></i>Pages</a>
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
		<div className="breadcrumbs overlay" style={{backgroundImage : "url(" +'images/breadcrumb-bg.jpg' + ")"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<h2>Upcoming Events</h2>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<ul className="bread-list">
							<li><a href="/">Home<i className="fa fa-angle-right"></i></a></li>
							<li><a href="#">Events<i className="fa fa-angle-right"></i></a></li>
							<li className="active"><Link to="/events">Events</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!--/ End Breadcrumb --> */}

		{/* <!-- Events --> */}
		<section className="events archive section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-12">
						<div className="section-title bg">
							<h2>Upcoming <span>Events</span></h2>
							<p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy</p>
							<div className="icon"><i className="fa fa-paper-plane"></i></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Event --> */}
						<div className="single-event">
							<div className="event-image">
								<img src="images/events/event1.jpg" alt="#" />
								<div className="event-date">
									<p>23<span>March</span></p>
								</div>
							</div>
							<div className="event-content">
								<h3 className="event-title"><a href="event-single.html">Admission Fair Spring 2019</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
								<span className="entry-date-time"><i className="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
							</div>
						</div>
						{/* <!-- End Single Event --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Event --> */}
						<div className="single-event">
							<div className="event-image">
								<img src="images/events/event2.jpg" alt="#" />
								<div className="event-date">
									<p>25<span>April</span></p>
								</div>
							</div>
							<div className="event-content">
									<h3 className="event-title"><Link to="event-single.html">Internation Web Developments Awards!</Link></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
								<span className="entry-date-time"><i className="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
							</div>
						</div>
						{/* <!-- End Single Event --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Event --> */}
						<div className="single-event">
							<div className="event-image">
								<img src="images/events/event3.jpg" alt="#" />
								<div className="event-date">
									<p>05<span>Jun</span></p>
								</div>
							</div>
							<div className="event-content">
									<h3 className="event-title"><a href="event-single.html">Actualized Network Seminar</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
								<span className="entry-date-time"><i className="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
							</div>
						</div>
						{/* <!-- End Single Event --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Event --> */}
						<div className="single-event">
							<div className="event-image">
								<img src="images/events/event4.jpg" alt="#" />
								<div className="event-date">
									<p>23<span>March</span></p>
								</div>
							</div>
							<div className="event-content">
									<h3 className="event-title"><a href="event-single.html">Admission Fair Spring 2019</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
								<span className="entry-date-time"><i className="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
							</div>
						</div>
						{/* <!-- End Single Event --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Event --> */}
						<div className="single-event">
							<div className="event-image">
								<img src="images/events/event5.jpg" alt="#" />
								<div className="event-date">
									<p>23<span>March</span></p>
								</div>
							</div>
							<div className="event-content">
								<h3 className="event-title"><a href="event-single.html">Admission Fair Spring 2019</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
								<span className="entry-date-time"><i className="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
							</div>
						</div>
						{/* <!-- End Single Event --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Event --> */}
						<div className="single-event">
							<div className="event-image">
								<img src="images/events/event6.jpg" alt="#" />
								<div className="event-date">
									<p>25<span>April</span></p>
								</div>
							</div>
							<div className="event-content">
									<h3 className="event-title"><a href="event-single.html">Internation Web Developments Awards!</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo</p>
								<span className="entry-date-time"><i className="fa fa-clock-o" aria-hidden="true"></i> 05:23 AM - 09:23 AM </span>
							</div>
						</div>
						{/* <!-- End Single Event --> */}
					</div>
				</div>
			</div>
		</section>    
        </>
    )
}












