import img4 from './assets/avatar/img/4.jpg';
import img5 from './assets/avatar/img/5.jpg';
import img6 from './assets/avatar/img/6.jpg';
import img7 from './assets/avatar/img/7.jpg';
import img8 from './assets/avatar/img/8.jpg';
import img9 from './assets/avatar/img/9.jpg';
import img10 from './assets/avatar/img/10.jpg';
import img3 from './assets/avatar/img/3.jpg'



class TesisServices{


    static  listarTesis(){
        // relizar la peticion a al api o bacnkend
        const ListTesis= [
            {
                urlImageAvatar:img5,
                title:"Contact Email not Linked",
                autor:"Tom Cruise",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"6:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img8,
                title:"Adding Images to Featured Posts",
                autor:"Matt Damon",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"8:00 AM",
                descargas:"low",
                fechaAuto:"on 24.05.2019"
            },
         
           
            {
                urlImageAvatar:img3,
                title:"When will I be charged this month?",
                autor:"Robert Downey",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"7:30 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
           
            {
                urlImageAvatar:img7,
                title:"Payment not going through",
                autor:"Christian Bale",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"5:00 PM",
                descargas:"normal",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img6,
                title:"Unable to add replies",
                autor:"Henry Cavil",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"4:00 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img4,
                title:"Downtime since last week",
                autor:"Chris Evans",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"2:00 PM",
                descargas:"normal",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img10,
                title:"Referral Bonus",
                autor:"Sam Smith",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"11:30 AM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
            {
                urlImageAvatar:img9,
                title:"How do I change my password?",
                autor:"Steve Rogers",
                fechaPublicacion:"Updated 1 day ago",
                ultimaEdicion:"1:00 PM",
                descargas:"heigh",
                fechaAuto:"on 24.05.2019"
            },
        
        ];

        return ListTesis;
    }
}

export default TesisServices;