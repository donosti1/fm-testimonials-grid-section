import React, {useState} from "react";
import {Avatar, Grid, GridItem, Image, Text, Stack} from "@chakra-ui/react";

import data from "../mock/data.json";

const App: React.FC = () => {
  const Profile = (props: any) => {
    return (
      <Stack
        backgroundColor={props.bgcolor}
        backgroundImage={props.quoteBg ? "url('assets/bg-pattern-quotation.svg')" : ""}
        backgroundPosition="80% 0%"
        backgroundRepeat="no-repeat"
        backgroundSize="24%"
        borderRadius={8}
        height="100%"
        padding={6}
        spacing={6}
      >
        <Stack direction="row" spacing={0}>
          <Avatar showBorder alt="jeremy" borderWidth={2} src={`/assets/${props.avatar}`} />
          <Stack color={props.darkFont ? "primary.500" : "primary.700"} paddingX={4} spacing={0}>
            <Text fontSize="13px" fontWeight="600" paddingTop={1}>
              {props.name}
            </Text>
            <Text fontSize="13px" opacity="50%">
              {props.title}
            </Text>
          </Stack>
        </Stack>
        <Stack color={props.darkFont ? "primary.500" : "primary.700"} spacing={0}>
          <Text fontSize="18px" fontWeight="600" lineHeight={1.2} paddingBottom={4}>
            {props.review}
          </Text>
          <Text fontSize="13px" opacity="70%">
            {props.quote}
          </Text>
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack
      backgroundColor="secondary.100"
      color="whiteAlpha.900"
      height={[null, "100vh"]}
      justifyContent="center"
      paddingX={[8, 0]}
      paddingY={[12, null]}
      width="100%"
    >
      <Stack alignSelf="center" borderRadius={12} width={[null, "container.lg"]}>
        <Grid gap={4} templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}>
          {data.map((item) => {
            return (
              <GridItem key={item.name} colSpan={[1, item.colSpan]} rowSpan={[1, item.rowSpan]}>
                <Profile {...item} />
              </GridItem>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default App;
