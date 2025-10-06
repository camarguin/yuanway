import Script from 'next/script'

export default function StructuredData() {
  const businessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://yuanway.vercel.app/#business',
    name: '緣味茶莊 Yuan Wei Tea House',
    alternateName: 'Yuan Wei Tea House',
    description: 'Premium Taiwan tea shop specializing in authentic loose leaf teas from Alishan and other renowned Taiwan tea regions',
    url: 'https://yuanway.vercel.app',
    telephone: '+886 2 2831-9249',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 98號, Lane 109, Dexing E Rd',
      addressLocality: 'Shilin District',
      addressRegion: 'Taipei City',
      postalCode: '111',
      addressCountry: 'TW'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.110682280762106,
      longitude: 121.52879598087547
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday', 
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:30',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    servesCuisine: 'Tea',
    priceRange: 'NT$620-NT$1450',
    paymentAccepted: ['Cash', 'Credit Card'],
    currenciesAccepted: 'TWD',
    hasMenu: 'https://yuanway.vercel.app/teas',
    image: [
      'https://yuanway.vercel.app/images/TeaShopLogo.png',
      'https://yuanway.vercel.app/images/heroBackground.jpg'
    ],
    sameAs: [
      // Add your social media URLs when you create them
      // 'https://www.facebook.com/yuanweitea',
      // 'https://www.instagram.com/yuanweitea'
    ]
  }

  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Premium Taiwan Tea Collection',
    description: 'Curated selection of premium Taiwan teas from renowned regions',
    numberOfItems: 6,
    itemListElement: [
      {
        '@type': 'Product',
        position: 1,
        name: 'Dragon Well Green Tea',
        description: 'Delicate and refreshing green tea with a subtle sweetness',
        category: 'Green Tea',
        origin: 'Alishan, Taiwan',
        offers: {
          '@type': 'Offer',
          price: '780',
          priceCurrency: 'TWD',
          availability: 'https://schema.org/InStock'
        }
      },
      {
        '@type': 'Product',
        position: 2,
        name: 'Earl Grey Premium',
        description: 'Classic Earl Grey with bergamot oil and natural citrus notes',
        category: 'Black Tea',
        origin: 'Nantou, Taiwan',
        offers: {
          '@type': 'Offer',
          price: '620',
          priceCurrency: 'TWD',
          availability: 'https://schema.org/InStock'
        }
      }
      // Add more products as needed
    ]
  }

  return (
    <>
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
      />
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
    </>
  )
}