
import { Box, ChakraProvider, Image, SimpleGrid } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  const images = 
[ 
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
    { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg"},
  
  ]
   
   
  ;
  return (
    <ChakraProvider>
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_1400x.gif?v=1661324429"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_1_1400x.png?v=1661518500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
            alt=""
          />
        </div>
      </Carousel>
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-Paytmm.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/Mobikwik-1440x128-23.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-BankOffer-PayUpto3.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg" />
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg" />
      </Box>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
        </SimpleGrid>
      </Box>
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_1400x.gif?v=1661324429"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_1_1400x.png?v=1661518500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
            alt=""
          />
        </div>
      </Carousel>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-SectionHeader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg" />
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FlashDealsHeaderStrip.jpg" />
      </Box>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/MicrosoftTeams-image-free-d.png" />
      </Box>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-Sectionheader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P1-GAP-Upto25.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P2-Produkt-Upto50.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P4-Avaasa-Min30.jpg" />
          </Box>
        </SimpleGrid>
        <Box>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/UHP-AJIOBeauty-1440x397.jpg" />
        </Box>
        <Carousel
          className="carousel"
          autoPlay="true"
          infiniteLoop="true"
          interval="2000"
          showThumbs=""
        >
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_1400x.gif?v=1661324429"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_1_1400x.png?v=1661518500"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
              alt=""
            />
          </div>
        </Carousel>
        <Box>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-Sectionheader.jpg" />
          <SimpleGrid columns={{ base: 2, md: 4 }}>
            <Box>
              {" "}
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P1-TopsTees-USPAPuma-Starting499.jpg" />
            </Box>
            <Box>
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg" />
            </Box>
            <Box>
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P3-LevisWrangler-JeansJegings-Starting999.jpg" />
            </Box>
            <Box>
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P2-Dresses-VeroModaONLY-Starting599.jpg" />
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-Sectionheader.jpg" />
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-AJIOGOLD.jpg" />
        </Box>
      </Box>
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_1400x.gif?v=1661324429"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_1_1400x.png?v=1661518500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
            alt=""
          />
        </div>
      </Carousel>
      <SimpleGrid columns={{ base: 2, md: 4 }}>
        {images?.map((el) => (
          <Box>
            <Image src={el.image} alt="err" />
          </Box>
        ))}
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default Home;
