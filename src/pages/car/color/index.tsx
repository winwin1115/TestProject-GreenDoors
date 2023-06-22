import { useRouter } from "next/router";
import { ReactElement } from "react";

import ButtonBase from "../../../components/Button/Button";
import LayoutMain from "../../../layout/main/index";
import { NextPageWithLayout } from "../../_app";
import SelectBox from "../../../components/SelectBox/SelectBox";
import Link from "next/link";
import Image from "next/image";

import BackButton from "../../../components/Button/ButtonIcon";
import BLUE from "../../../assets/SVGs/jul.svg";
import RED from "../../../assets/SVGs/matic.svg";
import BLACK from "../../../assets/SVGs/usdc.svg";
import ORANGE from "../../../assets/SVGs/jul.svg";
import BackArrow from "../../../assets/SVGs/backarrow.svg";

const colorTypes = [
  {
    name: "BLUE",
    img: BLUE,
  },
  {
    name: "RED",
    img: RED,
  },
  {
    name: "BLACK",
    img: BLACK,
  },
  {
    name: "ORANGE",
    img: ORANGE,
  },
];

const Color: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <div className="border border-color-wallet rounded-lg pl-5 py-10 pr-[22px] mb-20 sm:p-10 sm:w-full">
        <h2 className="text-2xl font-bold font-inter mb-11 select-none">
          Choose Color
        </h2>
        <div className="w-full bg-border-color-token h-px mb-[30px]"></div>

        <SelectBox
          className="mt-[41px]"
          label="COLOR"
          tokenTypes={colorTypes}
        ></SelectBox>
        <div className="mt-10">
          <Link href="/car/color/code">
            <ButtonBase label="NEXT" primary />
          </Link>
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

Color.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Color;
