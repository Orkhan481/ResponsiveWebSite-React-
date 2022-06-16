import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile , faStar , faCrown , faDiagramProject , faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import {faFigma} from '@fortawesome/free-brands-svg-icons' 
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
const ProcessManagement = () => {
    return (
        <div className='process-management'>
            <div className="titles">
                <h1>Kalite ve Süreç Yönetimi</h1>
                <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            </div>

            <div className="pm-info row">
                 <div className="card   col-md-4 col-xs-12">
                    <FontAwesomeIcon icon={faFile} size="2x"/>
                      <h3>Döküman Analizi</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam vitae deserunt. Porro officiis recusandae praesentium impedit? Ullam odit soluta minima vel dolore odio, ratione exercitationem porro totam omnis quis vero quo quod quos alias autem voluptate reprehenderit neque. Harum.</p>
                 </div>

                 <div className="card  col-md-4 col-xs-12">
                 <FontAwesomeIcon icon={faStar} size="2x"/>
                 <h3>Kabul ve Değerlendirme</h3>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nostrum mollitia aliquid neque illo quaerat dolor vero error quos modi. Quis reiciendis, veniam neque maiores excepturi ipsa fugiat. Praesentium dolorem ut necessitatibus atque eligendi at magnam reprehenderit sunt totam possimus?</p>
                 </div>

                 <div className="card  col-md-4 col-xs-12">
                 <FontAwesomeIcon icon={faCrown} size="2x"/>
                     <h3>İş Kuralları Analizi</h3>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro commodi rem ullam vel magni nulla itaque assumenda esse earum expedita. Quis sequi ratione earum ipsa eligendi. Quam quibusdam, sunt explicabo ullam quia minus sed exercitationem! Est aspernatur repellat molestiae nobis!</p>
                 </div>
            </div>

            <div className="pm-info row">
                 <div className="card  col-md-4 col-xs-12">
                 <FontAwesomeIcon icon={faDiagramProject} size="2x"/>
                      <h3>Akış Diyagramları</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quisquam esse aliquam, atque quo itaque obcaecati est illum, perferendis odit culpa, ducimus ratione dolor soluta illo laboriosam reprehenderit eius aut at voluptate! Tenetur itaque sequi commodi vel facilis, totam repudiandae?</p>
                 </div>

                 <div className="card  col-md-4 col-xs-12">
                 <FontAwesomeIcon icon={faCircleHalfStroke} size="2x"/>
                    <h3>Paydaş Analizi</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia molestias tempora quos pariatur eveniet tenetur et doloribus corporis itaque consequuntur cupiditate dicta sunt dolore harum labore, hic odio repudiandae expedita, ipsa eum. Porro molestiae fuga aliquid eos dignissimos perspiciatis.</p>
                 </div>

                 <div className="card  col-md-4 col-xs-12">
                 <FontAwesomeIcon icon={faFigma} size="2x"/>
                     <h3>Prototipleme</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil amet magni tenetur repudiandae consequuntur nemo. Esse voluptatem animi quaerat aspernatur unde quibusdam nostrum commodi facere, distinctio quam incidunt reprehenderit optio! Fuga inventore eveniet necessitatibus quis voluptatem impedit quod dolorum.</p>
                 </div>
            </div>

        </div>
    )
}

export default ProcessManagement