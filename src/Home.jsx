import Icon1 from "./assets/construction-engineer-hard-svgrepo-com.svg"
import Styles from "./styles/Home.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import ProfileImg from "./assets/WhatsApp Image 2024-11-03 at 7.47.03 PM (1).jpeg"
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';
import topoGrafiaSVG from "./assets/layer-basemap-svgrepo-com.svg"
import buildSVG from "./assets/build-svgrepo-com.svg"
import lupaSVG from "./assets/magnifying-glass-svgrepo-com.svg"
import {Swiper, SwiperSlide } from "swiper/react";
import img1 from "./assets/WhatsApp Image 2024-11-03 at 7.38.02 PM.jpeg"
import img2 from "./assets/WhatsApp Image 2024-11-03 at 7.38.03 PM.jpeg"
import img3 from "./assets/WhatsApp Image 2024-11-03 at 7.38.03 PM (1).jpeg"
import img4 from "./assets/WhatsApp Image 2024-11-03 at 7.40.59 PM (2).jpeg"
import img5 from "./assets/WhatsApp Image 2024-11-03 at 7.40.59 PM (3).jpeg"
import img6 from "./assets/WhatsApp Image 2024-11-03 at 7.41.00 PM.jpeg"
import img7 from "./assets/fracc1.jpeg"
import img8 from "./assets/fracc2.jpeg"
import img9 from "./assets/fracc3.jpeg"
import img10 from "./assets/muro1.jpeg"
import img11 from "./assets/muro2.jpeg"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GavelIcon from '@mui/icons-material/Gavel';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import Card from "./components/Card.jsx"

const Home = ()=>{

    return(
        <>
        <div className={Styles.profileContainer}>
        <Navbar/>

          <img className={Styles.profileImg} src={ProfileImg}/>
          <h2>Ingeniero Civil apasionado por transformar ideas en estructuras sólidas y funcionales</h2>
        <a className={Styles.whatsAppButton} href="https://wa.me/+5219612329554">WhatsApp</a>
        </div>

        <div className={Styles.services}>
        <button className={Styles.servicesButton}>Servicios</button>

<div className={Styles.service}>
<img src={topoGrafiaSVG} className={Styles.serviceImg} alt="Servicio"/>
<p className={Styles.serviceTittle}>Topografía</p>
<p className={Styles.serviceDescription}>Topografía para deslinde de predios, subdivisiones y lotificaciones.</p>
</div>

<div className={Styles.service}>
<img src={buildSVG} className={Styles.serviceImg} alt="Servicio"/>
<p className={Styles.serviceTittle}>Peritajes</p>
<p className={Styles.serviceDescription}>Peritajes judiciales para el Tribunal Superior de Justicia del Estado de Chiapas en materia de avaluos, agrimensura, topografía, partición de bienes y construcción.</p>
</div>


<div className={Styles.service}>
<img src={Icon1} className={Styles.serviceImg} alt="Servicio"/>
<p className={Styles.serviceTittle}>Cuantificación</p>
<p className={Styles.serviceDescription}>Cuantificación y determinación daños de obra civil</p>
</div>

<div className={Styles.service}>
<img src={lupaSVG} className={Styles.serviceImg} alt="Servicio"/>
<p className={Styles.serviceTittle}>Avaluos</p>
<p className={Styles.serviceDescription}>Avaluos comerciales de bienes inmuebles, avaluos comerciales de maquinaria y equipo</p>
</div>

        </div>

<div className={Styles.certifiedsContainer}>
    <div className={Styles.headerCertified}>
        <span className={Styles.certifiedLine}></span>
<VerifiedUserIcon  style={{backgroundColor:"#f1f0ee",gridRow:"1/2",gridColumn:"1/2",width:"40px",height:"50px"}}></VerifiedUserIcon>
</div>
<Card title={<EngineeringIcon style={{width:"40px",height:"40px"}}/>} description="José Limberg Gonzalez Pereyra, ingeniero Civil por el Instituto Politécnico Nacional, cédula profesional  3740723"/>
<Card title={<BedroomChildIcon style={{width:"40px",height:"40px"}}/>} description="Valuador Profesional con Orientación en Inmuebles por la Universidad Autónoma de Zacatecas, cédula profesional 11798894
"/>
<Card title={<PrecisionManufacturingIcon style={{width:"40px",height:"40px"}}/>} description="Valuador Profesional en Maquinaria y Equipo por la Universidad Autónoma de Zacatecas, cédula profesional en trámite.
"/>
<Card title={<GavelIcon style={{width:"40px",height:"40px"}}/>} description="Perito autorizado por el Consejo de la Judicatura  ante los Órganos del Poder Judicial  del Estado de Chiapas, número de registro 013."/>
</div>

        <div className={Styles.projectsContainer}>
<h2 className={Styles.projectsTittle}>Proyectos</h2>

<div className={Styles.projectContainer}>
<Swiper     navigation={true} pagination={true} modules={[Pagination,Navigation]} className={Styles.mySwiper}
>
    <SwiperSlide><img src={img1} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img2} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img3} className={Styles.imgProject}/></SwiperSlide>

</Swiper>
<p className={Styles.projectDescription}>
    {"Construcción de parque recreativo 'El Campestre', en Jalpa de Mendez, Tabasco. Pabellón a base arcos, campo de softbol y fútbol."}
    </p>
</div>

<div className={Styles.projectContainer}>
<Swiper         navigation={true} pagination={true} modules={[Pagination,Navigation]} className={Styles.mySwiper}
>
    <SwiperSlide><img src={img4} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img5} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img6} className={Styles.imgProject}/></SwiperSlide>

</Swiper>
<p className={Styles.projectDescription}>
    {"Rehabilitación de PTAR en el ejido 'El Jobo', municipio de Tuxtla Gutiérrez,  Chiapas.  Construcción de reactores RAFA y FAFA, mtto.  Humedales, tanque clorador y construcción de laboratorio."}
    </p>
</div>

<div className={Styles.projectContainer}>
<Swiper         navigation={true} pagination={true} modules={[Pagination,Navigation]} className={Styles.mySwiper}
>
    <SwiperSlide><img src={img7} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img8} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img9} className={Styles.imgProject}/></SwiperSlide>

</Swiper>
<p className={Styles.projectDescription}>
    {"Construcción de Fraccionamiento Loma Linda, Terán, municipio de Tuxtla Gutiérrez,  Chiapas.  Construcción de 96 deptos, obra exterior que incluye agua potable, alcantarillado y pavimentación."}
    </p>
</div>

<div className={Styles.projectContainer}>
<Swiper         navigation={true} pagination={true} modules={[Pagination,Navigation]} className={Styles.mySwiper}
>
    <SwiperSlide><img src={img10} className={Styles.imgProject}/></SwiperSlide>
    <SwiperSlide><img src={img11} className={Styles.imgProject}/></SwiperSlide>

</Swiper>
<p className={Styles.projectDescription}>
    {"Construcción de muro milán de concreto reforzado para contención de talud y muros de gaviones tipo alcancía."}
    </p>
</div>

        </div>
        

<div className={Styles.lineFooter}></div>
    
        </>
    )
}

export default Home