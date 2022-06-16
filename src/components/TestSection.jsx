import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const TestSection = () => {
  return (
    <div className='test-section'>
      <div className="titles">
        <h3>Test Yönetimiyle Neler Sağlıyoruz?</h3>
        <p>IoT Destekli Çözümler</p>
      </div>
      <div className="row cards">

        <div className=" card-item col-md-2 col-xs-12  d-flex">
          <p>Yazılım Kalitesini Arttırıyoruz</p>
        </div>

        <div className=" card-item col-md-1 col-xs-12  d-flex">
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
        </div>

        <div className=" card-item col-md-2 col-xs-12  d-flex">
          <p>Olası Hataları Önceden Belirliyoruz</p>
        </div>

        <div className=" card-item col-md-1 col-xs-12  d-flex">
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
        </div>

        <div className=" card-item col-md-2 col-xs-12  d-flex">
          <p>Oluşabilecek Riskleri Önlüyoruz</p>
        </div>

        <div className=" card-item col-md-1 col-xs-12  d-flex">
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
        </div>


        <div className=" card-item col-md-2 col-xs-12  d-flex">
          <p>Zaman ve Maliyetten Tasarruf Sağlıyoruz</p>
        </div>
      </div>

    </div>
  )
}

export default TestSection