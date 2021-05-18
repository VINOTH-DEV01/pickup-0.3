
import './Header.css';

function Header() {
    return (
        <header class="jumbotron bg-inverse text-xs-center center-vertically" role="banner">
            <div class="container">
                <h1 class="display-3">Land.io, blissful innovation.</h1>
                <h2 class="m-b-3">Craft your journey, </h2>
                <a class="btn btn-secondary-outline m-b-1" href="#" role="button"><span class="icon-sketch"></span>Sketch included</a>
                <ul class="nav nav-inline social-share">
                    <li class="nav-item"><a class="nav-link" href="#"><span class="icon-twitter"></span> 1024</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span class="icon-facebook"></span> 562</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span class="icon-linkedin"></span> 356</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;



