import img4 from './assets/avatar/img/4.jpg';
import img5 from './assets/avatar/img/5.jpg';
import img6 from './assets/avatar/img/6.jpg';
import img7 from './assets/avatar/img/7.jpg';
import img8 from './assets/avatar/img/8.jpg';
import img9 from './assets/avatar/img/9.jpg';
import img10 from './assets/avatar/img/10.jpg';



class TesisServices{


    static  listarTesis(){
        // relizar la peticion a al api o bacnkend
        const ListTesis= [
            {
                urlImageAvatar:img4,
                title:"Contact Email not Linked",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img5,
                title:"CAdding Images to Featured Posts",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"normal",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img6,
                title:"When will I be charged this month?",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img7,
                title:"Payment not going through",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img8,
                title:"Unable to add replies",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"low",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img9,
                title:"Downtime since last week",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img10,
                title:"Referral Bonus",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img10,
                title:"How do I change my password?",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
        
        ];

        return ListTesis;
    }
}

export default TesisServices;