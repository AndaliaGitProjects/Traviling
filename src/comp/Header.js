import Logo from '../images/earth-svgrepo-com.svg'
const Header = function(){
    return(
        <header>
            <div className="header__con">
                <img src={Logo} alt="" width='40' />
                <span>My travel journal.</span>
            </div>
        </header>
    )
}

export default Header