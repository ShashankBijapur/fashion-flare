
import { Box, ChakraProvider, HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  // const images =
  //   [
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P2-Trends.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P3-Sneakerhood.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/47.4_1.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P5-Sportswear.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P6-Footwear.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P7-Accessories.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P8-Wedding.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P9-Sarees.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P10-Homegrownbrands.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P11-Indie.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P12-Home.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P13-Watches.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P14-Innerwearmen.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P15-Jewellery.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P16-Lingerie.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P17-Beauty.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P18-yogawear.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P19-Azorte.jpg" },
  //     { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P20-MAx.jpg" },

  //   ]


    ;
  return (
    <>


      {/* ------------------------------------ Carousel 1 starts here ------------------------------------------------  */}
      <Box pt={10}>

        <Carousel
          className="carousel"
          autoPlay="true"
          infiniteLoop="true"
          interval="2000"
          showThumbs=""
        >
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P7-ArrowUSPA-upto50.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P4-FootwearCarnival-RedTapeFila-Flat60.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P5-JohnplayerLeecooperAvaasa-Upto700On1000.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P3-Casuals-CampusSutraVeroModa-Min60Extra30.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P6-Home-HomeexpressionsStoryAtHome-5080.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </Box>
      {/* ------------------------------------ Carousel 1 ends here ------------------------------------------------  */}


      <Box style={{margin:"auto"}}>
        <Image style={{width:"100vw"}}  src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ASS-Teaser-Strip.gif" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ASS-Teaser-HalfbannerRevised%20.gif" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SpecieUpYourBrandGame-SectionheaderStrip.jpg" />
      </Box>


      {/* ------------------------------------ Carousel 2 starts here ------------------------------------------------  */}
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P2-Brands-30-50--.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P2-CasualFootwear-ActionBucik-Under999Extra30.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P3-Kids-KBTSKFFrendz-Min50.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P4-Puma-Min40.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P5-Western-VeromodaThebearhouse-flat60extraupto35.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P7-HiFashionFits-SuperdryAx-3050.jpg"
            alt=""
          />
        </div>
      </Carousel>
      {/* ------------------------------------ Carousel 2 ends here ------------------------------------------------  */}


      {/* ------------------------------------ Carousel of paytm starts here ------------------------------------------------  */}
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
      {/* ------------------------------------ Carousel of paytm ends here ------------------------------------------------  */}

      {/* -------------------------------- block 1 starts here ------------------------------------------------------- */}
      <HStack width="100vw" justifyContent={'center'} alignItems='center' m='auto'  >
        <Image width="100%"  src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SS23-HalfBanner%20.gif" />
      </HStack>


      <Box>
        <HStack justifyContent={'center'} alignItems='center' m='auto'>

          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg" />
        </HStack>
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

      {/* --------------------------------------block 1 ends here ------------------------------------------ */}

      {/* -------------------------------- block 2 starts here ------------------------------------------------------- */}
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-SectionHeader.jpg" />
      </Box>


      <Box>
        <Image src="" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg" />
          </Box>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P3-Adidas-4060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P4-Campus-Upto60.jpg" />
          </Box>
        </SimpleGrid>
      </Box>

      {/* --------------------------------------block 2 ends here ------------------------------------------ */}

      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FlashDealsHeaderStrip.jpg" />
      </Box>


      {/* --------------------------------------Carousel 3 starts here ------------------------------------------ */}
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-Flash%20Deals%20-P8-Brands-Flat60.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-Flash%20Deals%20-P9-Brands-Min40.jpg"
            alt=""
          />
        </div>
      </Carousel>
      {/* --------------------------------------Carousel 3 ends here ------------------------------------------ */}


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
    

      {/* ------------------------------------------------ 2 Carousel starts here--------------------------------------------- */}
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHER-Sectionheader.jpg" />
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
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p1-brands-flat60.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p2-brands-min65.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p3-brands-3080.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p4-brands-starting699.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p5-brands-starting999.jpg"
            alt=""
          />
        </div>
      </Carousel>

      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHIM-Sectionheader.jpg" />
      </Box>

    </>
  );
}

export default Home;
