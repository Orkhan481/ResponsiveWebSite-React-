import React from 'react'
import Typed from 'react-typed'
const NavbarAndHeader = () => {
    return (
        <div className="navbar-and-header">

            <nav class="navbar navbar-expand-lg bg-transparent">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 d-flex align-items-center" >

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Çözüm ve Hizmetler</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Ürünler</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Teknolojiler</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">İnsan Kaynakları</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Kurumsal</a>
                            </li>

                            <li class="nav-item">
                                <button className='btn btn-danger'>İletişim</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <div className="header">
                <div className="titles">

                    <h1>Sitemize Hoş Geldiniz!</h1>

                    <div className="typed">
                        <Typed
                            strings={[
                                '23 Yıllık Tecrübe!',
                                'Hızlı Teslimat!',
                                'Yüksek Güvence!']}
                            typeSpeed={50}
                            backSpeed={60}
                            loop >
                        </Typed>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavbarAndHeader