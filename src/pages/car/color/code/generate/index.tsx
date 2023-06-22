import { ReactElement } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import LayoutMain from "../../../../../layout/main/index";
import { NextPageWithLayout } from "../../../../_app";
import { AppSelector } from "../../../../../hooks";
import { carState } from "../../../../../reducers/account.reducer";
import BackArrow from "../../../../../assets/SVGs/backarrow.svg";
import BackButton from "../../../../../components/Button/ButtonIcon";

const Generate: NextPageWithLayout = () => {
  const { carType, carColor, code } = AppSelector(carState);
  const router = useRouter();

  return (
    <>
      <div className="border border-color-wallet rounded-lg pl-5 py-10 pr-[22px] mb-20 sm:p-10 sm:w-full">
        <h2 className="text-2xl font-bold font-inter mb-11 select-none">
          Generated Text
        </h2>
        <div className="w-full bg-border-color-token h-px mb-[30px]"></div>

        <div className="text-xl font-medium font-inter mb-11 select-none">
          <p>
            I have a <b>{carType}</b> and the color is <b>{carColor}</b>.
            <tr></tr>
            {carColor === "RED" ? "THE CAR IS RED! NICE!!" : ""}
          </p>
          <p className="mt-10">
            <strong>REF: {code}</strong>
          </p>
        </div>
      </div>

      <BackButton
        label="Back"
        leftElementIcon={<Image src={BackArrow} alt="Back" />}
        className="mt-[30px] mb-44"
        onClick={() => {
          router.back();
        }}
      ></BackButton>
    </>
  );
};

Generate.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Generate;
