import TitleImage from './resources/Title.jpeg';
import GalleryPhoto1 from './resources/Gallery_Photo_1.jpeg';
import GalleryPhoto2 from './resources/amazon.png';
import GalleryPhoto3 from './resources/liverpool.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.jpeg';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';
import GalleryPhoto7 from './resources/Icono location.png';
import GalleryPhoto8 from './resources/Icono Novio.png';
import GalleryPhoto9 from './resources/Icono Novia.png';
import GalleryPhoto10 from './resources/Icono calendario.png';
import GalleryPhoto11 from './resources/Icono Pases.png';
import GalleryPhoto12 from './resources/Icono Smoking.png';
import GalleryPhoto13 from './resources/Icono Vestido.png';
import GalleryPhoto14 from './resources/vestimenta.jpeg';

const Configs: ConfigsType = {
  url: 'http://localhost:3000', 
  weddingDate: '27 | Mayo | 2023',
  weddingLocation: 'San Angel, Plaza Escenaria',
  groom: {
    name: 'Dani',
    fatherName: '',
    motherName: 'Carmen Pascual',
  },
  bride: {
    name: 'Liz',
    fatherName: 'Ricardo García',
    motherName: 'Graciela Gayosso',
  },
  titleImage: TitleImage,
  secondImage: GalleryPhoto1,
  locationMapImage: 'https://www.google.com/maps/embed?pb=!4v1675703181736!6m8!1m7!1s2E7THXoLJkqbFmD2jDTokw!2m2!1d19.336817746918!2d-99.19885012937503!3f197.37607947128996!4f2.7557307974014975!5f0.7820865974627469',
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto9,
    GalleryPhoto10,
    GalleryPhoto11,
    GalleryPhoto12,
    GalleryPhoto13,
    GalleryPhoto14
  ],
  invite: [
     {
      familyName: "María del Carmen Pascual Leonides",
      numberInvite :1,
      id: 8413464523
    },
    {
      familyName: "María Luisa Pascual Leonides",
      numberInvite :1,
      id: 5737665243      
    },
    {
      familyName: "Familia Blanco Gutierrez",
      numberInvite :2,
      id: 7820230051
    },
    {
      familyName: "Diego Guerrero",
      numberInvite :1,
      id: 4648327456      
    },
    {
      familyName: "Alejandro Sánchez",
      numberInvite :2,
      id: 1229194065
    },
    {
      familyName: "Mauricio Salazar",
      numberInvite :2,
      id: 9913896522      
    },
    {
      familyName: "Kenneth Rosas",
      numberInvite :2,
      id: 3460415415
    },
    {
      familyName: "Familia García Gayosso",
      numberInvite :4,
      id: 8597998709      
    },
    {
      familyName: "Familia Victoria García",
      numberInvite :4,
      id: 4165161219      
    },
    {
      familyName: "Garcia Gonzáles",
      numberInvite :2,
      id: 6367529898
    },
    {
      familyName: "Familia López Huerta",
      numberInvite :2,
      id: 9832149086      
    },
    {
      familyName: "Karla Herrera",
      numberInvite :2,
      id: 7189474670
    },
    {
      familyName: "Mauricio Sánchez",
      numberInvite :2,
      id: 6407310983      
    }
  ],
};

export type ConfigsType = {
  url: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  secondImage: string;
  locationMapImage: string;
  galleryImages: string[];
  index?: number;
  invite : Invete[];
};

type Invete = {
  familyName? : string;
  numberInvite? : number;
  id?: number;
}

type Person = {
  name: string;
  fatherName?: string;
  motherName?: string;
};

export default Configs;
