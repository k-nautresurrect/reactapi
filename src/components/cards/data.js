import { Button, Text } from "@chakra-ui/react";
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
  const [datacount, setDataCount] = useState([]);
  const [cardsdata, setCardsData] = useState([]);

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
            setDataCount(data);

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
      if (datafetched) {
        console.log("data is not fetched");
      }
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

  const handleSubmit = (data) => {
    if (data.type === "add") {
      setCardsData([...cardsdata, data]);
    } else if (data.type === "remove") {
      const cards = cardsdata.filter((card) => card.id !== data.id);
      setCardsData(cards);
    }
  };

  if (cardsdata) {
    console.log("card Data", cardsdata);
  }

  // const printData = () => {
  //   if (cardsdata.length !== 0) {
  //     console.log(cardsdata);
  //   } else {
  //     console.log("add some cards");
  //   }
  // };
  return (
    <>
      {bookedData.length !== 0
        ? bookedData.map((value, index) => {
            return <Text key={index}>{value}</Text>;
          })
        : console.log("not rendered text")}
      {prices.length !== 0
        ? prices.map((value, index) => {
            return <Text key={index}>{value}</Text>;
          })
        : console.log("not redered price")}
      {primaryservicename.length !== 0
        ? primaryservicename.map((value, index) => {
            return <Text key={index}>{value}</Text>;
          })
        : console.log("not rendered primar service name")}
      {secondaryservicename.length !== 0
        ? secondaryservicename.map((value, index) => {
            return <Text key={index}>{value}</Text>;
          })
        : console.log("not rendered primar service name")}
      {variantprops.length !== 0
        ? console.log("variant props : ", variantprops)
        : console.log("not rendered variant properties")}

      {datacount.length !== 0
        ? console.log("the length is :", datacount)
        : console.log("datacount is : ", datacount)}

      {datacount.length !== 0 &&
      bookedData.length !== 0 &&
      prices.length !== 0 &&
      primaryservicename.length !== 0 &&
      secondaryservicename.length !== 0 &&
      variantprops.length !== 0
        ? datacount.map((value, idx) => (
            <ItemCard
              key={idx}
              currindex={idx}
              index={datacount.length - 1}
              servicetype={bookedData}
              servicename={primaryservicename[idx]}
              secondservice={secondaryservicename[idx]}
              price={prices[idx]}
              timing={variantprops[idx]}
              submit={handleSubmit}
            />
          ))
        : console.log("something went wrong")}
      <Button
        variant={"solid"}
        colorScheme={"twitter"}
        onClick={() => alert(JSON.stringify(cardsdata))}
      >
        Submit
      </Button>
    </>
  );
};

export default CardData;
