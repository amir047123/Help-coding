import React, { useState } from "react";
import { SimCard } from "@mui/icons-material";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import Typography from "../../../Ui/Typography";
import CustomFormProvider from "../../../form/CustomFormProvider";
import CustomSelect from "../../../form/CustomSelect";
import CustomInput from "../../../form/CustomInput";
import CustomImageUpload from "../../../form/CustomImageUpload";
import { selectService, selectStatus } from "../../../../hardData/OptionsData";

export default function AddOperatorModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [uploadedLogoUrl, setUploadedLogoUrl] = useState(null);

  const onSubmit = (data) => {
    const updatedData = { ...data, logo: uploadedLogoUrl };

    console.log("Submitting data:", updatedData);
  };

  const handleLogoChange = (url) => {
    setUploadedLogoUrl(url);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        size="md"
        startContent={<SimCard className="w-5 h-5" />}
      >
        Post New Operator
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Typography.Heading4>Post a Operator</Typography.Heading4>
                <Divider className="my-4" />
              </ModalHeader>
              <CustomFormProvider onSubmit={onSubmit}>
                <ModalBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomSelect
                      name={"chooseService"}
                      label={"Choose Service"}
                      options={selectService}
                    />
                    <CustomSelect
                      name={"status"}
                      label={"Status"}
                      options={selectStatus}
                    />
                  </div>
                  <CustomInput
                    name={"operatorName"}
                    label={"Operator Name"}
                    placeholder={"Ex. Sky Wi-Fi"}
                  />
                  <CustomImageUpload
                    name={"uploadLogo"}
                    label={"Upload Operator Logo/Image"}
                    onChange={handleLogoChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="font-semibold"
                    size="lg"
                    fullWidth
                    color="primary"
                    type="submit"
                    onPress={onClose}
                  >
                    Post Operator
                  </Button>
                </ModalFooter>
              </CustomFormProvider>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
