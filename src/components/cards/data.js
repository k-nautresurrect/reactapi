import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GetValue } from "../../api/getvalues";
import ItemCard from "./itemcard";

const CardData = (props) => {
  // primary service name ...ok
  // variations ...ok
  // variations properties ...ok
  // variations price ...ok
  const [primaryservicename, setPrimaryServiceName] = useState([]);
  const [secondaryservicename, setSecondaryServiceName] = useState([]);
  const [datafetched, setDataFetched] = useState(false);
  const [bookedData, setBookedData] = useState([]);
  const [prices, setPrice] = useState([]);
  const [variantprops, setVariantProps] = useState([]);

  const callApi = () => {
    let serviceData = [];
    let priceData = [];
    let primaryServiceNames = [];
    let secondaryServiceNames = [];
    let variantprop = [];
    try {
      GetValue()
        .then((res) => {
          if (res !== null) {
            const data = res.data;
            console.log("data is : ", data);

            for (let i = 0; i < data.length; i++) {
              if (i <= 1) {
                let service = data[0].ServiceTypeRelations[i].ServiceType.name;
                serviceData.push(service);
              }
              const primaryname = data[i].primaryServiceName;
              const secondaryname = data[i].secondaryServiceName;
              const price = data[i].Variations[0].price;
              const varProp = data[i].Variations[0].VariationProperties;
              priceData.push(price);
              primaryServiceNames.push(primaryname);
              secondaryServiceNames.push(secondaryname);
              variantprop.push(varProp);
            }
            return serviceData;
          } else {
            console.log("no data is there");
          }
        })
        .then((service) => {
          setBookedData(service);
          setPrimaryServiceName(primaryServiceNames);
          setSecondaryServiceName(secondaryServiceNames);
          setVariantProps(variantprop);
        })
        .then(() => setPrice(priceData))
        .catch((err) => console.log("serviceData: ", err));
    } catch (err) {
      console.log("Error : ", err);
      setDataFetched(false);
    }
  };

  useEffect(() => {
    try {
      callApi();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {bookedData.length !== 0
        ? bookedData.map((value, index) => {
            return (
              <Text color={"white"} key={index}>
                {value}
              </Text>
            );
          })
        : console.log("not rendered text")}
      {prices.length !== 0
        ? prices.map((value, index) => {
            return (
              <Text color={"white"} key={index}>
                {value}
              </Text>
            );
          })
        : console.log("not redered price")}
      {primaryservicename.length !== 0
        ? primaryservicename.map((value, index) => {
            return (
              <Text color={"white"} key={index}>
                {value}
              </Text>
            );
          })
        : console.log("not rendered primar service name")}
      {secondaryservicename.length !== 0
        ? secondaryservicename.map((value, index) => {
            return (
              <Text color={"white"} key={index}>
                {value}
              </Text>
            );
          })
        : console.log("not rendered primar service name")}
      {variantprops.length !== 0
        ? console.log("variant props : ", variantprops)
        : console.log("not rendered variant properties")}

      {bookedData.length !== 0 &&
      prices.length !== 0 &&
      primaryservicename.length !== 0 &&
      secondaryservicename.length !== 0 &&
      variantprops.length !== 0 ? (
        <ItemCard
          servicetype={bookedData}
          servicename={primaryservicename[0]}
          secondservice={secondaryservicename[0]}
          price={prices[0]}
          timing={variantprops[0]}
        />
      ) : (
        console.log("something went wrong")
      )}
    </>
  );
};

export default CardData;
