import TitleImage from './resources/Title.jpeg';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.jpeg';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';



const Configs: ConfigsType = {
  url: 'http://localhost:3000', 
  weddingDate: '27 De Mayo 2023 a las 4:30 pm',
  weddingLocation: 'San Angel, Plaza Escenaria',
  groom: {
    name: 'Liz',
    fatherName: 'Ricardo Garcia',
    motherName: 'Graciela Gayosso',
  },
  bride: {
    name: 'Dani',
    fatherName: '',
    motherName: 'Carmen Pascual',
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
  ],
  invite: [
    'Familia Garcia Gayoso',
    'Maria del Carmen Pascual',
    'Familia Blanco',
    'Kenneth y Novia',
    'Mauricio y Novia',
    'Diego Guerrero',
    'Maria Luisa Pascual'
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
  invite : string[];
};

type Person = {
  name: string;
  fatherName?: string;
  motherName?: string;
};

export default Configs;
