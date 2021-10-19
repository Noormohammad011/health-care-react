import img1 from '../images/slider-01.jpg'
import img2 from '../images/slider-02.jpg'
import img3 from '../images/slider-03.jpg'

import GallaryImage1 from '../images/gallery-01.jpg'
import GallaryImage2 from '../images/gallery-02.jpg'
import GallaryImage3 from '../images/gallery-03.jpg'
import GallaryImage4 from '../images/gallery-04.jpg'
import GallaryImage5 from '../images/gallery-05.jpg'
import GallaryImage6 from '../images/gallery-06.jpg'
import GallaryImage7 from '../images/gallery-07.jpg'
import GallaryImage8 from '../images/gallery-08.jpg'

import services1 from '../images/departments-1.jpg'
import services2 from '../images/departments-2.jpg'
import services3 from '../images/departments-3.jpg'
import services4 from '../images/departments-4.jpg'
import services5 from '../images/departments-5.jpg'
import services6 from '../images/services-6.jpg'
import services7 from '../images/services-7.jpg'
import services8 from '../images/services-8.jpg'

const courasolIndex = [
  {
    id: 1,
    image: img1,
    intervalTime: 1000,
    camptionTitle: 'Make a difference',
    captionDescription:
      'tSupport the important work of The Royal Melbourne Hospital by making a much-needed donation today.',
  },
  {
    id: 2,
    image: img2,
    intervalTime: 500,
    camptionTitle: 'Living Healthy',
    captionDescription: `Become your best self. Discover new ways to live an inspiring life through natural beauty, nutrition and diet, an active lifestyle, and better relationships.`,
  },
  {
    id: 3,
    image: img3,
    intervalTime: 500,
    camptionTitle: 'Covid',
    captionDescription: `Even One Vaccinated Member Can Cut Family's COVID Risk`,
  },
]

let images = [
  {
    original: GallaryImage1,
  },
  {
    original: GallaryImage2,
  },
  {
    original: GallaryImage3,
  },
  {
    original: GallaryImage4,
  },
  {
    original: GallaryImage5,
  },
  {
    original: GallaryImage6,
  },
  {
    original: GallaryImage7,
  },
  {
    original: GallaryImage8,
  },
]

const services = [
  {
    id: 1,
    title: 'Imaging',
    image: services1,
    description:
      'Popular Diagnostic Centre Ltd. is an advanced Centre providing the diagnostic imaging services in an elevated ambience, completed by service and report efficiency.',
  },
  {
    id: 2,
    title: 'Pathology',
    image: services2,
    description:
      'Our Pathology division offers a comprehensive range of laboratory tests for diagnosis, management and prevention of a wide variety of diseases.',
  },
  {
    id: 3,
    title: 'Breast Cancer ',
    image: services3,
    description:
      'The commitment of our Breast Cancer Specialist for the prevention and treatment of Breast Cancer disease has led to the achievement of better outcomes and improved quality of life for thousands of patients who visit us each year.',
  },
  {
    id: 4,
    title: 'Colorectal Surgeon',
    image: services4,
    description:
      'The commitment of Colorectal surgeons for the prevention and treatment has led to the achievement of better outcomes and improved quality of life for thousands of patients who visit us each year.',
  },
  {
    id: 5,
    title: 'Neuro Surgeon',
    image: services5,
    description:
      'The commitment of our Neuro surgeons for the prevention and treatment of Neuro disease has led to the achievement of better outcomes and improved quality of life for thousands of Neuro patients who visit us each year.',
  },
  {
    id: 6,
    title: 'Gastroenterology',
    image: services6,
    description:
      'The commitment of our Gastroenterology specialist for the prevention and treatment of Gastroenterology disease has led to the achievement of better outcomes and improved quality of life for thousands of Gastroenterology patients who visit us each year.',
  },
  {
    id: 7,
    title: 'Eye/Ophthalmology',
    image: services7,
    description:
      'The commitment of our Eye/Ophthalmology specialist for the prevention and treatment of Eye/Ophthalmology disease has led to the achievement of better outcomes and improved quality of life for thousands of Eye/Ophthalmology patients who visit us each year.',
  },
  {
    id: 8,
    title: 'Plastic Surgery',
    image: services8,
    description:
      'The commitment of our Plastic surgeons for the prevention and treatment has led to the achievement of better outcomes and improved quality of life for thousands of patients who visit us each year.',
  }
]

export { courasolIndex, images, services }
