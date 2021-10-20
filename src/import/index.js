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
  },
]

const articles = [
  {
    id: 1,
    author: 'Staff Writer',
    title:
      'Pregnancy Changes Immune Response To Covid Vaccination: Report - NDTV',
    description:
      'Pregnant and breast-feeding women appear to respond relatively weakly to their first dose of Covid-19 vaccines, according to a study that indicates the importance of them receiving both doses of standard regimens.',
    url: 'https://www.ndtv.com/world-news/pregnancy-changes-immune-response-to-covid-vaccination-report-2581651',
    urlToImage:
      'https://i.ndtvimg.com/i/2016-08/pregnancy-generic_650x400_41470666562.jpg',
    publishedAt: '2021-10-20T08:02:13Z',
    content:
      'Studies have shown that pregnant women are particularly vulnerable to Covid symptoms.\r\nPregnant and breast-feeding women appear to respond relatively weakly to their first dose of Covid-19 vaccines, … [+1686 chars]',
  },
  {
    id: 2,
    author: 'Staff Writer',
    title:
      "Delta subvariant won't change COVID-19 picture, Oxford vaccine chief says - ZAWYA",
    description: 'Discovery of new variants is of course important to monitor',
    url: 'https://www.zawya.com/mena/en/story/Delta_subvariant_wont_change_COVID19_picture_Oxford_vaccine_chief_says-TR20211020nS8N2NF056X2/',
    urlToImage: 'https://www.zawya.com/resources/img/zawya-logo-en-social.png',
    publishedAt: '2021-10-20T08:01:42Z',
    content:
      'LONDON - A subvariant of Delta that is growing in England is being monitored but is not likely to change the COVID-19 picture, Oxford Vaccine Group chief Andrew Pollard said on Wednesday.\r\nThe subvar… [+796 chars]',
  },
  {
    id: 3,
    author: 'Holly Ellyatt',
    title:
      'UK doctors call for urgent return of Covid restrictions as experts monitor new mutation - CNBC',
    description:
      'U.K. medical professionals have issued an urgent plea to the British government to reimpose Covid restrictions just as experts watch a virus mutation closely.',
    url: 'https://www.cnbc.com/2021/10/20/uk-doctors-call-for-return-of-covid-restrictions-new-mutation-watched.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/106962972-1634710705822-gettyimages-1231994594-AFP_96V9JW.jpeg?v=1634710746',
    publishedAt: '2021-10-20T07:28:52Z',
    content:
      'Firefighter Dan Joslin wearing a face shield helps prone a Covid-19 patient as he works alongside critical care nurses in the Intensive Care Unit at Queen Alexandra Hospital in Portsmouth, southern E… [+7191 chars]',
  },
  {
    id: 4,
    author: 'Sambad English Bureau',
    title:
      'Study suggests like Covid-19, tuberculosis spreads through aerosols - Sambad English',
    description:
      'Johannesburg: Much like Covid-19, tuberculosis (TB) is also spread primarily by inhalation of virus-laden aerosols more than coughing, as thought so far, according to study by South African researchers.Researchers from the University of Cape Town pre',
    url: 'https://sambadenglish.com/study-suggests-like-covid-19-tuberculosis-spreads-through-aerosols/',
    urlToImage:
      'https://sambadenglish.com/wp-content/uploads/2021/10/aerosols.jpg',
    publishedAt: '2021-10-20T07:25:45Z',
    content:
      'Johannesburg: Much like Covid-19, tuberculosis (TB) is also spread primarily by inhalation of virus-laden aerosols more than coughing, as thought so far, according to study by South African researche… [+2253 chars]',
  },
  {
    id: 5,
    author: 'Express Web Desk',
    title:
      'Regular millet consumption improves haemoglobin levels and tackle iron-deficiency anaemia: Study - The Indian Express',
    description:
      'Hyderabad-based International Crops Research Institute for the Semi-Arid Tropics (ICRISAT) led the study by seven organisations across four countries. The findings were published on October 14 in Frontiers in Nutrition.',
    url: 'https://indianexpress.com/article/cities/hyderabad/regular-millet-consumption-improves-haemoglobin-levels-and-tackle-iron-deficiency-anaemia-study-7580978/',
    urlToImage:
      'https://images.indianexpress.com/2021/10/Pearl-millet-1200.jpg',
    publishedAt: '2021-10-20T07:23:23Z',
    content:
      'Regular consumption of millets can improve haemoglobin and serum ferritin levels to reduce iron-deficiency anaemia, according to a new study. The recently published research, a meta-analysis of 22 st… [+2780 chars]',
  },
  {
    id: 6,
    author: 'WION Web Team',
    title:
      'Viral infections could promote Alzheimer’s and Parkinson`s disease: Report - WION',
    description:
      'A recent research published in Nature Communications shows how specific chemicals on virus surfaces might increase the aggregation of harmful proteins linked with illnesses like Alzheimers and Parkinsons.',
    url: 'https://www.wionews.com/science/viral-infections-could-promote-alzheimers-and-parkinsons-disease-report-422249',
    urlToImage:
      'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2021/10/08/215106-untitled-design-31.jpg',
    publishedAt: '2021-10-20T07:14:35Z',
    content:
      "A recent research published in Nature Communications shows how specific chemicals on virus surfaces might increase the aggregation of harmful proteins linked with illnesses like Alzheimer's and Parki… [+1244 chars]",
  },
  {
    id: 7,
    author: 'ANI',
    title:
      'How New US Travel Rules Affect Various Countries, Including India - NDTV',
    description:
      'The new US travel policy will block entry to foreign nationals who have recovered from COVID-19 and then gotten one dose of two-dose vaccines -- a standard that France and the European Commission consider full vaccination.',
    url: 'https://www.ndtv.com/world-news/how-new-us-travel-rules-affect-various-countries-including-india-2581541',
    urlToImage:
      'https://c.ndtvimg.com/2021-10/lorn26t_covid-travel-restrictions-bloomberg_625x300_20_October_21.jpeg',
    publishedAt: '2021-10-20T06:42:28Z',
    content:
      'The US has never considered recovery from COVID-19 in its domestic definition of vaccination.\r\nThe new US travel policy will block entry to foreign nationals who have recovered from COVID-19 and then… [+3778 chars]',
  },
  {
    id: 8,
    author: 'ANI',
    title:
      'There are benefits of eating nuts for breast cancer survivors: Study - The New Indian Express',
    description:
      'There was a dose-response pattern in the relationship between nut consumption and risk of breast cancer recurrence or death, with those consuming the highest amounts having the lowest risks.',
    url: 'https://www.newindianexpress.com/lifestyle/health/2021/oct/20/there-are-benefits-of-eating-nuts-for-breast-cancer-survivors-study-2373575.html',
    urlToImage:
      'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/10/20/w600X390/breast_cancer.JPG',
    publishedAt: '2021-10-20T06:40:00Z',
    content:
      'WASHINGTON: Can eating nuts have health-protective effects for breast cancer survivors? A new study suggests that it might!\r\nAccording to the study, nut consumption is associated with lower risks of … [+873 chars]',
  },
  {
    id: 9,
    author: 'Lifestyle Desk',
    title:
      '‘Low calcium intake, Vitamin D deficiency widespread in Indians’ - The Hindu',
    description: null,
    url: 'https://news.google.com/__i/rss/rd/articles/CBMifmh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL2NpdGllcy9NYWR1cmFpL2xvdy1jYWxjaXVtLWludGFrZS12aXRhbWluLWQtZGVmaWNpZW5jeS13aWRlc3ByZWFkLWluLWluZGlhbnMvYXJ0aWNsZTM3MDg0NDI5LmVjZdIBgwFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9jaXRpZXMvTWFkdXJhaS9sb3ctY2FsY2l1bS1pbnRha2Utdml0YW1pbi1kLWRlZmljaWVuY3ktd2lkZXNwcmVhZC1pbi1pbmRpYW5zL2FydGljbGUzNzA4NDQyOS5lY2UvYW1wLw?oc=5',
    urlToImage: null,
    publishedAt: '2021-10-20T06:36:52Z',
    content: null,
  },
  {
    id: 10,
    author: 'Lifestyle Desk',
    title:
      'These 5 Yoga Asanas Can Increase Your Bone Density and Help Fight Osteoporosis - News18',
    description:
      'Osteoporosis means weakening of bones and might also lead to physical disability in older adults',
    url: 'https://www.news18.com/news/lifestyle/these-5-yoga-asanas-can-increase-your-bone-density-and-help-fight-osteoporosis-4342424.html',
    urlToImage:
      'https://images.news18.com/ibnlive/uploads/2021/10/yoga-163471085116x9.jpg',
    publishedAt: '2021-10-20T06:21:10Z',
    content:
      'There are endless perks of making yoga a part of your daily routine. From improving body functions to reducing stress and maintaining the overall well-being of an individual, yoga is a lifesaver. As … [+2378 chars]',
  },
  {
    id: 11,
    author: 'Reuters',
    title:
      'COVID-19 vaccine can provide some immunity against all types of coronaviruses finds study - Firstpost',
    description:
      'a universal Sarbecovirus vaccine can be made for SARS-CoV-1, SARS-CoV-2 and other SARS-related coronaviruses, and a universal Embecovirus for HCoV-OC43 and HKU1 that cause common colds.',
    url: 'https://www.firstpost.com/health/covid-19-vaccine-can-provide-some-immunity-against-all-types-of-coronaviruses-finds-study-10070371.html',
    urlToImage:
      'https://images.firstpost.com/wp-content/uploads/2021/06/spencer-davis-4oKXRdv9x7E-unsplash-1.jpg',
    publishedAt: '2021-10-20T06:11:07Z',
    content:
      'a universal Sarbecovirus vaccine can be made for SARS-CoV-1, SARS-CoV-2 and other SARS-related coronaviruses, and a universal Embecovirus for HCoV-OC43 and HKU1 that cause common colds.\r\n COVID-19 va… [+3394 chars]',
  },
  {
    id: 12,
    author: 'Reuters',
    title:
      'US surgeons successfully test pig kidney transplant in human patient - Times of India',
    description:
      "US News: NEW YORK: For the first time, a pig kidney has been transplanted into a human without triggering immediate rejection by the recipient's immune system,.",
    url: 'https://timesofindia.indiatimes.com/world/us/us-surgeons-successfully-test-pig-kidney-transplant-in-human-patient/articleshow/87150024.cms',
    urlToImage:
      'https://static.toiimg.com/thumb/msid-87150042,width-1070,height-580,imgsize-55476,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
    publishedAt: '2021-10-20T04:01:00Z',
    content:
      'US surgeons successfully test pig kidney transplant in human patient',
  },
  {
    id: 13,
    author: 'News18',
    title:
      'AI Tech That May Spot Unseen Signs of Heart Failures Developed - News18',
    description:
      'In the study, the researchers at Mount Sinai described the development of an artificial intelligence (AI)-based computer algorithm that not only assessed the strength of the left ventricle but also the right ventricle.',
    url: 'https://www.news18.com/news/buzz/ai-tech-that-may-spot-unseen-signs-of-heart-failures-developed-4342049.html',
    urlToImage:
      'https://images.news18.com/ibnlive/uploads/2021/10/ai-based-algorithm-to-spot-heart-failures-163470116716x9.png',
    publishedAt: '2021-10-20T03:57:39Z',
    content:
      'US researchers have developed an electrocardiogram-reading algorithm that can detect subtle signs of heart failure. Heart failure, or congestive heart failure, occurs when the heart pumps less blood … [+2079 chars]',
  },
]

const faq = [
  {
    id: 1,
    accordian_header: 'What type of health plans do you accept?',
    accordian_body: `For your convenience, we file most types of insurance, including Medicare, Medicaid, Individual and Commercial plans. For a complete list of insurance companies and accepted Health plans, please visit our Insurance page under Patient Resources. Insurance plans accepted`,
  },
  {
    id: 2,
    accordian_header: `What if I don't have insurance?`,
    accordian_body: `Doctor’s Medical Center knows the importance of your health and the added costs of being healthy, that’s why we offer competitive prices on all our services avoiding that your health becomes a financial problem.`,
  },
  {
    id: 3,
    accordian_header: `What if I don't have transportation?`,
    accordian_body: `Doctor’s Medical Center offers courtesy transportation for most insurances to and from doctors and specialty offices.`,
  },
  {
    id: 4,
    accordian_header: 'Can I be seen without an appointment?',
    accordian_body: `Calling our office at the first sign of illness helps to ensure that you receive an appointment time sooner rather than later. Normally, we are able to schedule same-day appointments for those requiring immediate non – emergency care.`,
  },
  {
    id: 5,
    accordian_header: 'Can I communicate with my provider?',
    accordian_body: `Yes, you can contact your personalized care team, by calling our main number, 305.685.5688. You can also register in our practice’s Patient Portal (myhealthrecord.com). By registering, you will be able to send direct messages to your physician regarding general questions and/or medication refills.`,
  },
]

export { courasolIndex, images, services, articles, faq }
