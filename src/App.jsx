import { Box, Stack, Spinner, Flex } from "@chakra-ui/react";

// Fetch APi
import FetchApi from "./api/FetchApi";

// Component
import Cards from "./components/Card";
import PopupInfo from "./components/Popup";
import { Backtop } from "./components/BackTop";

// Theme
import { ToggleDark } from "./components/Toggle";

function App() {
  // Import Fetch API
  const { data, error, loading } = FetchApi();

  // Render Loading
  if (loading) {
    return (
      <Flex align="center" justify="center" h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
        />
      </Flex>
    );
  }

  // Render Error
  if (error) {
    return <Box>Error: {error.message}</Box>;
  }

  return (
    <>
      <Box maxW={["98%", "90%", "50%"]} mx="auto" my="20px">
        {/* render Button - Information - START */}
        <Flex direction="row" gap="20px">
          <ToggleDark />
          <PopupInfo>
            <PopupInfo.Header titleInfo="About this pages" />
            <PopupInfo.Body BodyInfo="This page read all repository from github. Create with vite, react and chakra-ui." />
          </PopupInfo>
        </Flex>
        {/* render Button - Information - END */}

        {/* Render Cards - START */}
        {data.map((post) => (
          <Cards key={post.id} variant="elevated">
            <Cards.Images title={post.name} imgs={post.owner.avatar_url} />
            <Stack>
              <Cards.Body
                title={post.name}
                desc={post.description}
                alink={post.html_url}
                tags={post.topics.join(", ")}
              />
              <Cards.Foot title="Preview" alink={post.html_url} />
            </Stack>
          </Cards>
        ))}
        {/* Render Cards - END */}

        {/* Back Top - Start */}
        <Backtop />
        {/* Back Top - END */}
      </Box>
    </>
  );
}

export default App;
