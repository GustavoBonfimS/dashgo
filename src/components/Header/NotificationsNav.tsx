import { HStack, Icon } from "@chakra-ui/react";
import { RiNotification2Line, RiUserLine } from "react-icons/ri";

function NotificationsNav() {
  return (
    <HStack
      spacing={['6','8']}
      mx={['6','8']}
      pr={['6','8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotification2Line} fontSize="20" />
      <Icon as={RiUserLine} fontSize="20" />
    </HStack>
  );
}

export default NotificationsNav;
