import React from "react";
import CarouselComponent from "./ProductStoryVisualizer/CarouselComponent";
import { Stack } from "@chakra-ui/react";
import { ProductStoryContext } from "./context";
import { ChakraProvider } from "@chakra-ui/react";

const content = [
  {
    id: "285VcAFoncQreagf3a0aj",
    data: [
      {
        id: "KQ7WnYGbd3BpwnHFTheLY",
        type: "carousel_2d_image",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/vbvlhqaqrztddikzdiyudtaiijogss",
      },
    ],
    type: "carousel_2d_image",
    header: "",
    isActive: true,
  },
];

const sheetData = [
  {
    id: "m_yrMHZeXP3rs77gJRt1u",
    data: [
      {
        id: "ioli5XCsq9LEVbtcrF5nO",
        type: "brand_banner",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/akzhpilunwdjcbcljwasqrdwfirayz",
      },
    ],
    type: "brand_banner",
    header: "",
    isActive: true,
  },
  {
    id: "-N2QVOWVg8fxHDXql9CLl",
    data: [
      {
        id: "9Qger21aL8UsufwN1Qmcu",
        type: "image_content",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/edykinwiavirdakormfbrasjwokojp",
      },
      {
        id: "GZyfAZ-oUEzrQs9rnk-Od",
        type: "image_content",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/rawdjaquycblpoltbtgfrfxuzlyoeu",
      },
      {
        id: "0_6G1FJgyJ9vBEpnhsqY0",
        type: "image_content",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/wwuzqmsduixwalrkurykmztypcgckx",
      },
    ],
    type: "image_content",
    header: "",
    isActive: true,
    image_urls: [],
  },
  {
    id: "3de3MqBpvhga1eOeptaHG",
    data: [
      {
        id: "LVadvR7MIW3JSJUry9fTH",
        type: "partners",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/cmkqoqgwbgvqawqatbmwslbhufwcuu",
      },
      {
        id: "fncHzeQO3OTIlZ4prIEPD",
        type: "partners",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/cynlrnbsxrsoowlfafkyttdopooxow",
      },
      {
        id: "asjnz8vX45QUyD07munhc",
        type: "partners",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/cqwcxnsfzgnphefomvinuqxpxmwysx",
      },
      {
        id: "YRc9wuDTTdXZ2nTN1nAmz",
        type: "partners",
        image_url:
          "https://agspert-weatherstation1.s3.amazonaws.com/media/1079/duwwwncckateihxrlmvfabghttprtm",
      },
    ],
    type: "partners",
    header: "",
    isActive: true,
  },
  {
    id: "8N3Gcft-XksMBuZZKis8I",
    data: [],
    type: "text_content",
    header: "Hi! We are AgSpeak",
    content:
      "We provide tools to businesses to build and publish their brand sotries in immersive ways",
    isActive: true,
  },
  {
    id: "-mZ5TAODwOBjMHfsLQuVA",
    url: "https://www.agspert.com",
    data: [],
    type: "redirect_url",
    label: "Contact Us",
    header: "",
    isActive: true,
  },
  {
    id: "WOGvlYA77vVcZQ8_Cv90Q",
    data: [],
    type: "social_links",
    header: "",
    isActive: true,
    social_links: [
      {
        id: "cLBqigGF0IWB8qZf7IR-1",
        url: "",
        label: "youtube",
      },
      {
        id: "mA_4La9GfaPhGcDMieU_G",
        url: "",
        label: "facebook",
      },
      {
        id: "Wai11M0LHqlJ0BnWanu_t",
        url: "",
        label: "instagram",
      },
      {
        id: "xSWarSl2Dn3JLcb0gPP7f",
        url: "",
        label: "amazon",
      },
      {
        id: "v7f4M3G73xcwFMr0Es1ft",
        url: "",
        label: "shopify",
      },
    ],
  },
];

const Story = () => {
  // Create a context value object
  const productStoryContextValue = {
    addInfoPoint: () => {},
    removeInfoPoint: () => {},
    getInfoPoints: () => {},
    updateInfoPointText: () => {},
    isDisabled: true,
    styles: {},
    handleStyleChange: () => {},
  };

  return (
    <ChakraProvider>
      <ProductStoryContext.Provider value={productStoryContextValue}>
        <Stack
          w="277.4px"
          h="572.85px"
          borderWidth={5}
          borderColor="black"
          borderRadius={50}
          overflow="hidden"
          boxShadow="lg"
          position="relative"
        >
          <CarouselComponent
            productData={content || {}}
            defaultSheetData={sheetData || []}
          />
        </Stack>
      </ProductStoryContext.Provider>
    </ChakraProvider>
  );
};

export default Story;
