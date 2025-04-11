import ProductDetail from "../../components/productdetailpages/ProductDetailPage"; 
import ImgTextile1 from "../../assets/gaineTextileImg/ImgTextile1.jpg";
import ImgTextile2 from "../../assets/gaineTextileImg/ImgTextile2.jpg";
import ImgTextile3 from "../../assets/gaineTextileImg/ImgTextil3.jpg";
import obl1 from "../../assets/gaineTextileImg/obl1.jpeg";
import obl2 from "../../assets/gaineTextileImg/obl2.jpeg";
import { Box, Card, CardBody, CardHeader, Center, Flex, Heading } from "@chakra-ui/react";
import ProductsSlide from "../../components/HomeComponent/ProductsSlide";
import { products } from "../../constants";

const GainTextilePage = () => {
  const images = [ImgTextile1, ImgTextile2, ImgTextile3, obl1, obl2];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../../public/gaine.pdf"; // Path to your PDF file
    link.download = "gaine.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
  <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt="10">
  <Flex justify="center" align="center" mt="50px" gap="50px" flexWrap="wrap">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full items-center">
          {/* product photos */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <ProductDetail images={images} />
          </div>

          {/* product description */}
       
            <Card
     className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
     backgroundColor="white"
     color="white"
     p="6"
   >
    <CardHeader>
        <Heading fontSize={{ base: "30px", md: "40px", lg: "45px" }} color="#004F87" fontFamily="montserrat" fontWeight="bold">
        "Gaine Textile"        </Heading>
    </CardHeader>
    <CardBody>
    <Heading fontSize={{ base: "15px", md: "20px", lg: "25px" }} color="black" fontFamily="montserrat">
    "Toute sorte de forme à savoir les circulaires, demi-circulaires, oblong, quart de cercle.
    Le tissu utilisé est de classement au feu M0 ou M1 ou non classé."    </Heading>
    <Flex
              onClick={handleDownload}
              mt={20}
              as="button"
              w="full"
              h="40px"
              bg="blue.500"
              color="white"
              justify="center"
              align="center"
              borderRadius="md"
              fontWeight="bold"
              _hover={{ bg: "blue.600" }}
            >
              Fiche Technique
            </Flex>
    </CardBody>
   </Card>
    </div>
 </Flex>
</Box>
<Heading mt={100} paddingLeft={360} color="#004F87">Autres Produits</Heading>
<Center mt={10} marginRight={100}>
<ProductsSlide slides={products.filter(product => product.id !== 1)} /> </Center>
 </div>
)
};

export default GainTextilePage;
