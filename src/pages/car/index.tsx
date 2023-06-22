import { useRouter } from "next/router";
import { ReactElement } from "react";

import ButtonBase from "../../components/Button/Button";
import LayoutMain from "../../layout/main/index";
import { NextPageWithLayout } from "../_app";
import SelectBox from "../../components/SelectBox/SelectBox";
import Link from "next/link";

import AUDI from "../../assets/SVGs/jul.svg";
import BMW from "../../assets/SVGs/matic.svg";
import VAUXHALL from "../../assets/SVGs/usdc.svg";
import MERCEDES from "../../assets/SVGs/jul.svg";
import PEUGEOT from "../../assets/SVGs/matic.svg";
import REANULT from "../../assets/SVGs/usdc.svg";

const carTypes = [
  {
    name: "AUDI",
    img: AUDI,
  },
  {
    name: "BMW",
    img: BMW,
  },
  {
    name: "VAUXHALL",
    img: VAUXHALL,
  },
  {
    name: "MERCEDES",
    img: MERCEDES,
  },
  {
    name: "PEUGEOT",
    img: PEUGEOT,
  },
  {
    name: "REANULT",
    img: REANULT,
  },
];

const Car: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="border border-color-wallet rounded-lg pl-5 py-10 pr-[22px] mb-20 sm:p-10 sm:w-full">
      <h2 className="text-2xl font-bold font-inter mb-11 select-none">
        Choose Car
      </h2>
      <div className="w-full bg-border-color-token h-px mb-[30px]"></div>

      <SelectBox
        className="mt-[41px]"
        label="Asset"
        tokenTypes={carTypes}
        flag="carType"
      ></SelectBox>

      <div className="mt-10">
        <Link href="/car/color">
          <ButtonBase label="NEXT" primary />
        </Link>
      </div>
    </div>
  );
};

Car.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default Car;
