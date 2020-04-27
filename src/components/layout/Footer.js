import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="page-footer grey lighten-2 black-text">
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h5>레시피몰</h5>
            <h6><i className="fas fa-phone prefix"></i> 1588-0000</h6>
            <p className="grey-text">
                        대표자: 박준희 &nbsp;&nbsp;&nbsp;&nbsp; 서울시 은평구 증산로 000 ㅁㅁㅁㅁ빌딩 000호<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col s12 l4 offset-l2">
            <h5>Follow Us</h5>
            <ul>
              <li><i className="fab fa-instagram grey-text text-darken-2"></i> <Link to="/" className="grey-text text-darken-2">Instagram</Link></li>
              <li><i className="fab fa-facebook-square grey-text text-darken-2"></i> <Link to="/" className="grey-text text-darken-2">Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey">
        <div className="container center-align">&copy; 2019 RecipeMall corps</div>
      </div>
    </footer>
  )
}

export default Footer
