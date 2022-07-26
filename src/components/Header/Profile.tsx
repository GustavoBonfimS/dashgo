import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Bonfim</Text>
        <Text color="gray.300" fontSize="small">
          gustavo.hbonfim@outlook.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gustavo Bonfim"
        src="https://github.com/GustavoBonfimS.png"
      />
    </Flex>
  );
}

export default Profile;
