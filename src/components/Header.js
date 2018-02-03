import React from "react";

let textCenter = {
    textAlign:"center"
};

let logoStyle = {
    fontSize:40
};

let marginTop = {
    marginTop:10
};

const Header = () =>
    <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <div className="navbar-header" style={textCenter}>
                        <a className="navbar-brand" style={logoStyle}>LOGO</a>
                    </div>
                </div>
                <div className="col-lg-7" style={marginTop}>
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <i class="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown"><b>City</b><span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a>Los Angeles</a></li>
                                <li><a>Chicago</a></li>
                                <li><a>Seattle</a></li>
                                <li><a>New York</a></li>
                                <li><a>Whittier</a></li>
                                <li><a>Glendale</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown"><b><i className="fa fa-user"></i></b></a>
                            <ul id="login-dp" className="dropdown-menu">
                                <li>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form className="form" method="post" action="login" id="login-nav">
                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                                        <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" />keep me logged-in
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bottom text-center">
                                            New here ? <a><b>Join Us</b></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

export default Header;
