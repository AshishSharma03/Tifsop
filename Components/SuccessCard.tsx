import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  AlertDialogBody,
  Button,
} from "@chakra-ui/react";
import { useSuccessCardContext } from "../Context/SuccessCardContext";
import { useRouter } from "next/navigation";

interface BasicUsageProps {
  isOpen?: boolean;
}

const SuccessCard = (props: BasicUsageProps) => {
  const { isOpen, close } = useSuccessCardContext();
  const router = useRouter();
  const [info, setInfo] = React.useState(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleResetClick = () => {
    setInfo(true);
    localStorage.clear();
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={close}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              Response Submitted Successfully! ✅
            </AlertDialogHeader>
            {info ? <AlertDialogBody>Reload the page!</AlertDialogBody> : ""}
            <AlertDialogFooter gap={3}>
              {!info ? (
                <Button type="button" onClick={handleResetClick}>
                  Clear form
                </Button>
              ) : (
                ""
              )}
              <Button type="button" colorScheme="teal" onClick={close}>
                Skip
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default SuccessCard;
