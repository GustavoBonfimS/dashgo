import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

function Profile({ showProfileData = false }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Bonfim</Text>
          <Text color="gray.300" fontSize="small">
            gustavo.hbonfim@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Bonfim"
        src="https://github.com/GustavoBonfimS.png"
      />
    </Flex>
  );
}

export default Profile;
